import { Component } from '@angular/core';
import { Income } from '../../models/income';
import { Category } from '../../models/category';
import { IncomeService } from '../../services/income.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,MatNativeDateModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  model: any = { category: '', amount: 0, month: '', year: null, isPlanned: false };
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currentYear: number = new Date().getFullYear();
  categories: string[] = Object.values(Category);

  constructor(private expenseService: IncomeService) { }

  onSubmit() {
    this.expenseService.addIncome(this.model);
    this.model = { id: 0, category: Category.Other, amount: 0, month: '', year: 0, isPlanned: false };
  }
  onYearSelected(event: any, datepicker: any) {
    this.model.year = event.getFullYear().toString(); 
    datepicker.close(); 
  }
}
