import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SeoService} from '../../../core/services/seo/seo.service';
import {UiService} from '../../../shared/services/ui/ui.service';
import {BlockAccentComponent} from '../../../shared/modules/block-accent/block-accent.component';
import {AccordionComponent} from '../../../shared/modules/accordion/accordion.component';
import {BlockModuleComponent} from '../../../shared/modules/block-module/block-module.component';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ProductService} from '../../../core/services/api/product/product.service';
import {SlugifyPipe} from '../../../core/pipes/slugify/slugify.pipe';
import {ProductModel} from '../../../core/models/models';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    BlockAccentComponent,
    AccordionComponent,
    BlockModuleComponent,
    SlugifyPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  programs: Record<string, ProductModel[]> = {};
  loading = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              protected uiService: UiService,
              private seoService: SeoService,
              protected productService: ProductService) {

    const content =
      'This application was developed with. It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProgramms().subscribe({
      next: (data) => {
        this.programs = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    });
  }
}
