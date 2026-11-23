import { Producto } from './producto';

export interface Bodega {
  id: number;
  nombre: string;
  ubicacion: string;
  productos: Producto[];
}

export interface NuevaBodega {
  nombre: string;
  ubicacion: string;
}
