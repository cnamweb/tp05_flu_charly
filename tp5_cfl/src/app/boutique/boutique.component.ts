import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { FilterComponent } from '../filter/filter.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
    selector: 'app-boutique',
    standalone: true,
    imports: [CommonModule, FilterComponent, ProductListComponent],
    templateUrl: './boutique.component.html',
    styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
    products: Produit[] = [];
    productsFiltered: Produit[] = [];
    differentCategories: string[] = [];
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getProduits().subscribe((data: Produit[]) => {
            this.products = data;
            this.productsFiltered = data;
            this.differentCategories = this.getDifferentCategories(); 
        });
    }

    getDifferentCategories() {
        let categories: string[] = [];
        this.products.forEach(product => {
            product.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
        });

        return categories;
    }

    onFilterChange(filter: { search: string, selectedCategory: string }) {
        this.productsFiltered = this.products.filter(product => {
            if (filter.selectedCategory != "All" && !product.categories.includes(filter.selectedCategory)) {
                return false;
            }
            if (filter.search != "" && !product.product.toLowerCase().includes(filter.search.toLowerCase())) {
                return false;
            }
            return true;
        });
    }
}