import { Category } from "./category";

export interface Expense {
    id: number;
    category: Category;
    amount: number;
    month: string;
    year: number;
    isPlanned: boolean;
  }