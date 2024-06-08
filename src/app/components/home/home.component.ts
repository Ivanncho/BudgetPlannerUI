import { Component } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../models/income';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  expenses: Expense[] = [];
  incomes: Income[] = [];
  combinedData: any[] = [];

  constructor(private expenseService: ExpenseService, private incomeService:IncomeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.expenses = this.expenseService.getExpenses();
    this.incomes = this.incomeService.getIncomes();
    this.combinedData = [ ...this.expenses, ...this.incomes];
  }
}
