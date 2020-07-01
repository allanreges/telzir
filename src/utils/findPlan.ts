import { ActivePlan, Plans, Combinations } from './schemas';

export default function findPlan(
  activePlan: ActivePlan,
  plans: Plans[],
  combinations: Combinations[],
) {
  const findCombination = combinations.filter(item => {
    return (
      item.origin === activePlan.origin && item.destiny === activePlan.destiny
    );
  });

  const findActivePlan = plans.filter(item => {
    return item.id == activePlan.plan;
  });

  const result = {
    minutePrice: findCombination[0].priceMin,
    planLabel: findActivePlan[0].label,
    planMinutes: findActivePlan[0].minutes,
    minutes: activePlan.minutes,
  };

  return result;
}
