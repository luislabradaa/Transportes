import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.css']
})
export class AutobusComponent implements OnInit {

elemento=[];

columnas=[
  'origen',
  'destino',
  'horario',
];

  constructor() { }

  ngOnInit(): void {
  }

}
