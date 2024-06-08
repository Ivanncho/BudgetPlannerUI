import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenses: Expense[] = [];
  private nextId = 1;

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense): void {
    expense.id = this.nextId++;
    this.expenses.push(expense);
  }
}
