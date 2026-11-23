import { Component, OnInit, inject, signal } from '@angular/core';
import { BodegaFormComponent } from './components/bodega-form.component';
import { ProductosTablaComponent } from './components/productos-tabla.component';
import { BodegaService } from './services/bodega.service';
import { Bodega } from './models/bodega';

@Component({
  selector: 'app-root',
  imports: [BodegaFormComponent, ProductosTablaComponent],
  template: `
    <main>
      <h1>Sistema de bodegas y productos</h1>
      <app-bodega-form (registrada)="consultar()" />
      @if (error()) { <p role="alert">{{ error() }}</p> }
      <app-productos-tabla [bodegas]="bodegas()" />
    </main>
  `
})
export class AppComponent implements OnInit {
  private readonly service = inject(BodegaService);
  readonly bodegas = signal<Bodega[]>([]);
  readonly error = signal('');

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.error.set('');
    this.service.consultar().subscribe({
      next: bodegas => this.bodegas.set(bodegas),
      error: () => this.error.set('No se pudieron consultar los productos. Verifica la conexión con el backend.')
    });
  }
}
