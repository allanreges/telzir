import { Result } from './schemas';

export default function calculatePrice(data: Result) {
  const finalMinutes = data.minutes - data.planMinutes;
  const priceWhitoutPlan = data.minutes * data.minutePrice;
  let extraPrice = 0;

  if (finalMinutes > 0) {
    extraPrice = data.minutePrice * finalMinutes * 1.1;
  }
  const result = {
    priceWithPlan: extraPrice,
    priceWithoutPlan: priceWhitoutPlan,
  };

  return result;
}
