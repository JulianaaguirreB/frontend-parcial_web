import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BodegaService } from '../services/bodega.service';

@Component({
  selector: 'app-bodega-form',
  imports: [ReactiveFormsModule],
  template: `
    <section>
      <h2>Registrar bodega</h2>
      <form [formGroup]="form" (ngSubmit)="registrar()">
        <label for="nombre">Nombre</label>
        <input id="nombre" formControlName="nombre" maxlength="100" required>
        <label for="ubicacion">Ubicación</label>
        <input id="ubicacion" formControlName="ubicacion" maxlength="200" required>
        <button type="submit" [disabled]="form.invalid || guardando()">{{ guardando() ? 'Guardando...' : 'Registrar' }}</button>
      </form>
      @if (mensaje()) { <p role="status">{{ mensaje() }}</p> }
    </section>
  `
})
export class BodegaFormComponent {
  private readonly service = inject(BodegaService);
  private readonly fb = inject(FormBuilder);
  readonly registrada = output<void>();
  readonly guardando = signal(false);
  readonly mensaje = signal('');
  readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/\S/)]],
    ubicacion: ['', [Validators.required, Validators.maxLength(200), Validators.pattern(/\S/)]]
  });

  registrar() {
    if (this.form.invalid || this.guardando()) return;
    this.guardando.set(true);
    this.mensaje.set('');
    const valores = this.form.getRawValue();
    this.service.registrar({ nombre: valores.nombre.trim(), ubicacion: valores.ubicacion.trim() }).subscribe({
      next: () => {
        this.form.reset();
        this.guardando.set(false);
        this.mensaje.set('Bodega registrada correctamente.');
        this.registrada.emit();
      },
      error: () => {
        this.guardando.set(false);
        this.mensaje.set('No se pudo registrar la bodega. Verifica que el backend esté funcionando.');
      }
    });
  }
}
