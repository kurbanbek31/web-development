import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  // Expose global function to the template
  encodeURIComponent = encodeURIComponent;

  onLike(): void {
    this.product.likes += 1;
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}
