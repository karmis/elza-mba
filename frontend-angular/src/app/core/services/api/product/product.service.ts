// src/app/product.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ProductModel} from '../../../models/models';
import {Product} from '../../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.moscow.mba';
  private productsSubject = new BehaviorSubject<Record<string, ProductModel[]>>({});
  public products$ = this.productsSubject.asObservable();
  private loading = false;

  constructor(private http: HttpClient) {
  }

  getProgramms(): Observable<Record<string, ProductModel[]>> {
    if (this.loading) {
      return this.products$;
    }

    this.loading = true;

    const url = `${this.apiUrl}/products`;

    return this.http.get<Product[]>(url).pipe(
      map((response: Product[]) => {
        return this.getStruct(response)
      }),
      tap(data => {
        this.productsSubject.next(data);
        this.loading = false;
      })
    );
  }

  getStruct(products: Product[]): Record<string, ProductModel[]> {
    return products.reduce((acc, product) => {
      if (!product?.specializedSubjects?.filter((subj) => subj.skills?.length).length) {
        return  acc?acc:{};
      }
      const key = product.study_field.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      // product.specializedSubjects = [...product.baseSubjects, ...product.specializedSubjects]

      acc[key].push(new ProductModel(product));


      return acc;
    }, {} as Record<string, ProductModel[]>);
  }
}
