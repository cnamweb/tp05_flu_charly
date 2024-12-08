import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../models/produit';
import { PanierService } from '../panier.service';
import { Produit_panier } from '../models/produit_panier';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Produit[] = [];

  constructor(private panierService: PanierService) { }

  onAddToCart(product: Produit, quantity: string) {
    const pr_panier = new Produit_panier();
    pr_panier.product = product.product;
    pr_panier.price = product.price;
    pr_panier.unit = product.unit;
    //convert quantity to number
    pr_panier.quantity = parseInt(quantity);

    pr_panier.description = product.description;

    this.panierService.addProduit(pr_panier);
  }
}