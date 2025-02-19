import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Injectable({providedIn: 'root'})
export class UiService {
  private _isMobile: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,) {
  }
  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  checkWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
