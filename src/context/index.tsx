import React, { createContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { Plans, Combinations, Data } from '../utils/schemas';

export const PhonesData = createContext<Data>({} as Data);

export const DataProvider: React.FC = ({ children }) => {
  const [plans, setPlans] = useState<Plans[]>([]);
  const [combinations, setCombinations] = useState<Combinations[]>([]);

  const getPlans = useCallback(async () => {
    const response = await api.get('/plans');
    setPlans(response.data);
  }, []);

  const getPossibleCombinations = useCallback(async () => {
    const response = await api.get('/combinations');
    setCombinations(response.data);
  }, []);
  useEffect(() => {
    getPlans();
    getPossibleCombinations();
  }, []);

  return (
    <PhonesData.Provider value={{ plans, combinations }}>
      {children}
    </PhonesData.Provider>
  );
};
