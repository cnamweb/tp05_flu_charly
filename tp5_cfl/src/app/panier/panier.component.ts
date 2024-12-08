import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
import { Produit_panier } from '../models/produit_panier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  constructor(private panierService: PanierService) { }

  get getNbProduits() {
    return this.panierService.getNbProduits;
  }

  get getPanier() {
    return this.panierService.getPanier;
  }

  get getTotal() {
    return this.panierService.getTotal;
  }

  onRemoveFromCart(product: Produit_panier) {
    this.panierService.removeProduit(product);
  }

  onSetQtt(product: Produit_panier, quantity: string) {
    const q = parseInt(quantity);
    product.quantity = q;
    this.panierService.setProduitQtt(product);
  }
}
