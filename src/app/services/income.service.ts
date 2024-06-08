import { Injectable } from '@angular/core';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private incomes: Income[] = [];
  private nextId = 1;

  getIncomes(): Income[] {
    return this.incomes;
  }

  addIncome(expense: Income): void {
    expense.id = this.nextId++;
    this.incomes.push(expense);
  }
}
