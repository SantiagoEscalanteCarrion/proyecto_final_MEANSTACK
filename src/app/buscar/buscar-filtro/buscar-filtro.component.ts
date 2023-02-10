import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar-filtro',
  templateUrl: './buscar-filtro.component.html',
  styleUrls: ['./buscar-filtro.component.css']
})

export class BuscarFiltroComponent {
  // Evento que podemos escuchar fuera del componente
  @Output() criteriaSelected = new EventEmitter();

  onCriteriaSelect(filtro: number) {
    this.criteriaSelected.emit(filtro);
  }
}
