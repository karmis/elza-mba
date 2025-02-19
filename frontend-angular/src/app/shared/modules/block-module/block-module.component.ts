import {Component, Input} from '@angular/core';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {ProductModel} from '../../../core/models/models';

@Component({
  selector: 'app-block',
  templateUrl: './block-module.component.html',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
  ],
  styleUrls: ['./block-module.component.scss']
})
export class BlockModuleComponent {
  @Input() title = '';
  @Input() products: ProductModel[] = []
  showAllSubjects = false;
  countIterations = 0;

  incrementIteration() {
    this.countIterations = this.countIterations + 1;
  }

}
