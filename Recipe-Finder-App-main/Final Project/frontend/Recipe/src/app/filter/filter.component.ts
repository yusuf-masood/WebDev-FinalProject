import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() chicken: number = 0;
  @Input() vegetables: number = 0;
  @Input() plant: number = 0;
  @Input() grains: number = 0;
  @Input() dairy: number = 0;
  @Input() meat: number = 0;

  selectedButton: string = ''; // Define a property to store the selected category

  @Output() categorySelected = new EventEmitter<string>();

  onchangeEmit() {
    this.categorySelected.emit(this.selectedButton);
    console.log(this.selectedButton);
    
  }

}
