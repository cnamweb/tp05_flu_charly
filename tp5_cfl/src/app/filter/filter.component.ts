import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    imports: [FormsModule, CommonModule],
    styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Output() filterChanged = new EventEmitter<{ search: string, selectedCategory: string }>();

    @Input() differentCategories: string[] = [];

    search: string = '';
    selectedCategory: string = 'All';

    onFilterChange() {
        this.filterChanged.emit({ search: this.search, selectedCategory: this.selectedCategory });
    }
}