import { RouterOutlet } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ApiService } from './api.service';

import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoutiqueComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'TP5 - CFL';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
  }
}