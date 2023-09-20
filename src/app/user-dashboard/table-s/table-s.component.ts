import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-s',
  templateUrl: './table-s.component.html',
  styleUrls: ['./table-s.component.scss']
})
export class TableSComponent {
  @Input() id:number = 0;
}
