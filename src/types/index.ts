export type Program =
  | "weight-loss"
  | "high-protein"
  | "diabetic"
  | "healthy-heart"
  | "post-partum";

export type DeliverySlot = "pagi" | "siang" | "all-at-once";

export type SubscriptionPlan = "trial" | "weekly-5" | "weekly-7" | "monthly" | "premium";

export interface MenuItem {
  time: string;
  emoji: string;
  name: string;
  calories: number;
  protein: number;
  image: string;
}

export interface DayMenu {
  day: string;
  items: MenuItem[];
}

export interface ProgramPlan {
  id: Program;
  emoji: string;
  name: string;
  tagline: string;
  calories: string;
  highlight: string;
  color: string;
  mealsPerDay: string;
  sample: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  age: number;
  result: string;
  program: Program | "corporate";
}

export interface FAQItem {
  question: string;
  answer: string;
}
