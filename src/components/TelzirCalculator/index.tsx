import React, {
  useCallback,
  useState,
  useRef,
  useMemo,
  useContext,
} from 'react';
import NumberFormat from 'react-number-format';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Select from '../Select';
import Input from '../Input';
import Button from '../Button';

import { ActivePlan, FinalResult } from '../../utils/schemas';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  Title,
  SubTitle,
  FormContainer,
  ResultContainer,
} from './styles';
import findPlan from '../../utils/findPlan';
import calculatePrice from '../../utils/calculatePrice';

import { PhonesData } from '../../context/index';

const TelzirCalculator: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [activePlan, setActivePlan] = useState<ActivePlan>({} as ActivePlan);
  const [result, setResult] = useState<FinalResult>({} as FinalResult);
  const { plans, combinations } = useContext(PhonesData);

  const handleSeletion = useCallback(e => {
    e.persist();
    setActivePlan(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const listOfPlans = useMemo(() => {
    if (plans) {
      const listPlans = plans.map(plan => {
        return { value: plan.id, label: plan.label };
      });

      return listPlans;
    }
  }, [plans]);

  const possibleDestinations = useMemo(() => {
    if (combinations) {
      const possibleMatches = combinations
        .filter(item => item.origin === activePlan.origin)
        .map(destination => {
          return { value: destination.destiny, label: destination.destiny };
        });

      return possibleMatches;
    }
  }, [activePlan.origin]);

  const origins = useMemo(() => {
    if (combinations) {
      const set = new Set();
      const possibleMatches = combinations
        .map(destination => {
          return { value: destination.origin, label: destination.origin };
        })
        .filter(item => {
          if (!set.has(item.label)) {
            set.add(item.label);
            return true;
          }
          return false;
        }, set);

      return possibleMatches;
    }
  }, [combinations]);

  const handleFindPlan = async (data: ActivePlan) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        origin: Yup.string().required('Insira um DD origem'),
        destiny: Yup.string().required('Insira um DD de destino válido'),
        minutes: Yup.number().moreThan(
          0,
          'Digite a quantidade de minutos da chamada',
        ),
        plan: Yup.string().required('Selecione um plano Telzir'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
      return;
    }
    const results = findPlan(data, plans, combinations);
    const prices = calculatePrice(results);
    const finalResult = {
      priceWithPlan: prices.priceWithPlan,
      priceWithoutPlan: prices.priceWithoutPlan,
      planLabel: results.planLabel,
    };

    setResult(finalResult);
  };

  return (
    <>
      <Container>
        <Title>
          Bem vindo ao Calculador de Minutos da <b>Telzir!</b>
        </Title>
        <SubTitle>
          Neste painel é possível calcular o valor de suas ligações de acordo
          com o seu plano, basta preencher o formulário abaixo.
        </SubTitle>
        <FormContainer ref={formRef} onSubmit={handleFindPlan}>
          <Select
            data={origins && origins}
            name="origin"
            onChange={e => handleSeletion(e)}
            placeholder="selecione o DD de origem"
          />
          <Select
            data={possibleDestinations && possibleDestinations}
            name="destiny"
            disabled={!activePlan.origin}
            onChange={e => handleSeletion(e)}
            placeholder="selecione o DD de destino"
          />
          <Input name="minutes" placeholder="Digite a quantidade de minutos" />
          <Select
            data={listOfPlans && listOfPlans}
            name="plan"
            placeholder="Selecione o seu Plano"
          />
          <Button>Calcular Valor da Chamada</Button>
        </FormContainer>
        {result.planLabel && (
          <ResultContainer>
            <p>
              {`Preço com o Plano ${result.planLabel}`}
              <br></br>
              <span>
                <NumberFormat
                  value={result.priceWithPlan.toFixed(2)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                />
              </span>
            </p>
            <p>
              preço minutos avulsos<br></br>
              <span>
                <NumberFormat
                  value={result.priceWithoutPlan.toFixed(2)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                />
              </span>
            </p>
          </ResultContainer>
        )}
      </Container>
    </>
  );
};

export default TelzirCalculator;
