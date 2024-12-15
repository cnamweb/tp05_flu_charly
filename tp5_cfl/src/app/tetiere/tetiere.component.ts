import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../states/panier.state';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  @Select(PanierState.getNbProduits) nbProduits$!: Observable<number>;

  constructor(private store: Store) { }
}
