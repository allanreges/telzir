import findPLan from '../../utils/findPlan';

describe('Function to calculate the price with a plan and without a plan', () => {
  it('should return the final prices', () => {
    const calculate = findPLan(
      {
        origin: '011',
        destiny: '016',
        plan: 1,
        minutes: 31,
      },
      [
        {
          id: 1,
          label: 'FaleMais 30',
          minutes: 30,
        },
      ],
      [
        {
          id: 1,
          origin: '011',
          destiny: '016',
          priceMin: 1.9,
        },
      ],
    );

    expect(calculate).toHaveProperty('minutePrice');
  });
});
