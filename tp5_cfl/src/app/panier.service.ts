import { Injectable, signal } from '@angular/core';
import { Produit_panier } from './models/produit_panier';

@Injectable({
    providedIn: 'root'
})
export class PanierService {
    private panier = signal<Produit_panier[]>([]);

    constructor() { }

    addProduit(produit: Produit_panier) {
        let panier = this.panier();
        let found = false;

        for (let i = 0; i < panier.length; i++) {
            if (panier[i].product === produit.product) {
                panier[i].quantity += produit.quantity;
                found = true;
                break;
            }
        }

        if (!found) {
            panier.push(produit);
        }

        this.panier.set(panier);
    }

    setProduitQtt(produit: Produit_panier) {
        let panier = this.panier();
        if (produit.quantity <= 0) {
            this.removeProduit(produit);
            return;
        }

        for (let i = 0; i < panier.length; i++) {
            if (panier[i].product === produit.product) {
                panier[i].quantity = produit.quantity;
                break;
            }
        }

        this.panier.set(panier);
    }

    removeProduit(card: Produit_panier) {
        let panier = this.panier();
        for (let i = 0; i < panier.length; i++) {
            if (panier[i].product === card.product) {
                
                panier.splice(i, 1);
                this.panier.set(panier);
                break;
            }
        }
    }

    get getPanier() {
        return this.panier;
    }
}