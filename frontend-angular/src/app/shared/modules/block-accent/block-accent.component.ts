import {Component, Input} from '@angular/core';
import {SeoService} from '../../../core/services/seo/seo.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-block-accent',
  templateUrl: './block-accent.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrls: ['./block-accent.component.scss']
})
export class BlockAccentComponent {
  @Input() folder: 'right' | 'left' | 'none' = 'none';
  @Input() kind: 'accent' | 'secondary' = 'secondary';
  @Input() header: string = 'Header';
  @Input() content: string = 'Content';

  constructor(private seoService: SeoService) {

    const content =
      'This application was developed with. It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
}
