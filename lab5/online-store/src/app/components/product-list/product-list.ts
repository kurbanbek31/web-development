import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnChanges {
  // Expose global function to the template
  encodeURIComponent = encodeURIComponent;

  @Input() products: Product[] = [];

  displayProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayProducts = [...this.products];
    }
  }

  onDelete(id: number): void {
    this.displayProducts = this.displayProducts.filter((p) => p.id !== id);
  }
}
