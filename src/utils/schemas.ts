export interface ActivePlan {
  origin: string;
  destiny: string;
  minutes: number;
  plan: number;
}

export interface Combinations {
  id: number;
  origin: string;
  destiny: string;
  priceMin: number;
}

export interface Plans {
  id: number;
  label: string;
  minutes: number;
}

export interface Result {
  minutePrice: number;
  planLabel: string;
  planMinutes: number;
  minutes: number;
}

export interface Data {
  plans: Plans[];
  combinations: Combinations[];
}

export interface FinalResult {
  priceWithPlan: number;
  priceWithoutPlan: number;
  planLabel: string;
}

export interface Option {
  value: string;
  label: string;
}
