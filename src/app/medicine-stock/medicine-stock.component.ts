import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-stock',
  templateUrl: './medicine-stock.component.html',
  styleUrls: ['./medicine-stock.component.css']
})
export class MedicineStockComponent {
  title = 'custom-search-filter-example';
  searchedKeyword: string;
  
  filterResultDataSet = [
    {
      name: 'Johnson & Johnson',
      chemicalComposition: 'abc, def',
      targetAilment: 'Alzhemier',
      doe:'21/08/2025',
      quantity: 42342
    },
    {
      name: 'Sputnik',
      chemicalComposition: 'abc, def',
      targetAilment: 'Corona',
      doe:'21/08/2025',
      quantity: 12490
    },
    {
      name: 'Covaxin',
      chemicalComposition: 'abc, def',
      targetAilment: 'Alzhemier',
      doe:'21/08/2025',
      quantity: 42789
    },
    {
      name: 'Covishield',
      chemicalComposition: 'abc, def',
      targetAilment: 'Alzhemier',
      doe:'21/08/2025',
      quantity: 3004
    },
    
  ]

}
