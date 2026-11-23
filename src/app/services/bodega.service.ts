import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bodega, NuevaBodega } from '../models/bodega';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:8080/bodegas';

  consultar() {
    return this.http.get<Bodega[]>(this.url);
  }

  registrar(bodega: NuevaBodega) {
    return this.http.post<Bodega>(this.url, bodega);
  }
}
