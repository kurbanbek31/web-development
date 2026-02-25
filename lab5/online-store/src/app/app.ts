import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductList } from './components/product-list/product-list';
import { RouterOutlet } from '@angular/router';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductList, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Category[]>('/categories.json').subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Failed to load categories.json', err);
      },
    });

    this.http.get<Product[]>('/products.json').subscribe({
      next: (data) => {
        this.products = data;
        this.applyFilter();
      },
      error: (err) => {
        console.error('Failed to load products.json', err);
      },
    });
  }

  onCategorySelect(id: number): void {
    this.selectedCategoryId = id;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.selectedCategoryId === null) {
      this.filteredProducts = [];
      return;
    }
    this.filteredProducts = this.products.filter(
      (p) => p.categoryId === this.selectedCategoryId
    );
  }
}
