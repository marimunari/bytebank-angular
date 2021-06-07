import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from "../models/transferencia.model";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService,
              private router: Router) {}

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
