import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios =['kennethrdz', 'ruffles123', 'fire_fist_ace'];
  constructor() { }
  
  ngOnInit(): void {
  }

}
