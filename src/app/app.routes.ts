import { Routes } from '@angular/router';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'expenses', component: ExpenseComponent, pathMatch: "full"},
    { path: 'incomes', component: IncomeComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];
