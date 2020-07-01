import calculatePrice from '../../utils/calculatePrice';

describe('Function to calculate the price with a plan and without a plan', () => {
  it('should return the final prices', () => {
    const calculate = calculatePrice({
      minutePrice: 1.9,
      planLabel: '',
      planMinutes: 30,
      minutes: 31,
    });

    expect(calculate).toHaveProperty('priceWithPlan');
  });
});
