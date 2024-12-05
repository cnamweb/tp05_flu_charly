import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Produit[] = [];
}