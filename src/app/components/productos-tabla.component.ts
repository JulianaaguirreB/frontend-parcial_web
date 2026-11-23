import { Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bodega } from '../models/bodega';

@Component({
  selector: 'app-productos-tabla',
  imports: [DecimalPipe],
  template: `
    <section>
      <h2>Productos por bodega</h2>
      <div class="tabla">
        <table>
          <thead><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Bodega</th></tr></thead>
          <tbody>
            @for (fila of filas(); track fila.producto.id) {
              <tr>
                <td>{{ fila.producto.nombre }}</td>
                <td>$ {{ fila.producto.precio | number:'1.0-2' }}</td>
                <td>{{ fila.producto.cantidad }}</td>
                <td>{{ fila.bodega }}</td>
              </tr>
            } @empty {
              <tr><td colspan="4">No hay productos para mostrar.</td></tr>
            }
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class ProductosTablaComponent {
  readonly bodegas = input.required<Bodega[]>();
  readonly filas = computed(() => this.bodegas().flatMap(bodega =>
    bodega.productos.map(producto => ({ producto, bodega: bodega.nombre }))
  ));
}
