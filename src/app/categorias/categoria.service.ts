import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: AuthHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas():Promise<any> {

    return this.http.get(`${this.categoriasUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
