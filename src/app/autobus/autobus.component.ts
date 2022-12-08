import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResumenViaje } from '../modelos/ResumenViaje';
import { TransporteService } from '../service/transporte.service';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.css']
})
export class AutobusComponent {

origen: any[] = [];
destino: any[] = [];
viajeForm:FormGroup | undefined;

viaje: ResumenViaje | undefined;

  constructor(
    private ts: TransporteService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.seleccionarOrigen()

  }

  createContactForm():FormGroup{
    return this.viajeForm = this.fb.group({
        id_origen: [this.viaje?.id_origen],
        id_destino: [this.viaje?.id_destino],
        id_paq: [this.viaje?.id_paq],
        hora:[this.viaje?.hora],
        fecha: [this.viaje?.fecha],
        total:[this.viaje?.total],

        
      });
    }

  seleccionarOrigen() {
    
    this.ts.consultarOrigen().subscribe((data) => {
    
      this.origen = data.list;
    
    });
  }

  seleccionarDestino() {
    
    this.ts.consultarDestino().subscribe((data) => {
    
      this.origen = data.list;
    
    });
  }
}
