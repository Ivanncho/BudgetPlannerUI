import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,MatNativeDateModule ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  model: any = { category: '', amount: 0, month: '', year: null, isPlanned: false };
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currentYear: number = new Date().getFullYear();
  categories: string[] = Object.values(Category);

  constructor(private expenseService: ExpenseService) { }

  onSubmit() {
    this.expenseService.addExpense(this.model);
    this.model = { category: '', amount: 0, month: '', year: null, isPlanned: false };
  }

  onYearSelected(event: any, datepicker: any) {
    this.model.year = event.getFullYear().toString(); 
    datepicker.close(); 
  }
}
