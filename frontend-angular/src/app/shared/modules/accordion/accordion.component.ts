import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModel} from '../../../core/models/models';

@Component({
  selector: 'app-accordion',
  imports: [
    CommonModule
  ],
  templateUrl: './accordion.component.html',
  standalone: true,
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  isOpen = false;
  @Input() title = '';
  @Input() products: ProductModel[] = []
}
