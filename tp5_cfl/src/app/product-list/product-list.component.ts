import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../models/produit';
import { Produit_panier } from '../models/produit_panier';
import { Select, Store } from '@ngxs/store';
import { AddProduit } from '../actions/panier-action';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Produit[] = [];

  constructor(private store: Store) { }

  onAddToCart(product: Produit, quantity: string) {
    const pr_panier = new Produit_panier();
    pr_panier.product = product.product;
    pr_panier.price = product.price;
    pr_panier.unit = product.unit;
    //convert quantity to number
    pr_panier.quantity = parseInt(quantity);

    pr_panier.description = product.description;

    this.store.dispatch(new AddProduit(pr_panier));
  }
}