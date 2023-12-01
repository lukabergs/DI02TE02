import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numSecreto!: number;
  numCandidato?: number;
  mensaje: string = '';
  intentos!: number;
  acierto: boolean = false;
  public botones = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alerta ignorada');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.iniciarJuego();
        console.log('Juego reiniciado');
      },
    },
  ];

  constructor() { }

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    // Generar un número aleatorio entre 0 y 100
    this.numSecreto = Math.floor(Math.random() * 101);
    this.numCandidato = undefined;
    this.intentos = 0;
    this.mensaje = '';
  }

  comprobar() {
    // Lógica para comprobar el número introducido
    if (this.numCandidato === this.numSecreto) {
      this.acierto = true;
      this.mensaje = '¡¡Enhorabuena!! Has acertado el número secreto.';
    } else {
      this.acierto = false;
      if (this.numCandidato !== undefined) {
        if (this.numCandidato > 0 && this.numCandidato < 100) {
          if (this.numCandidato > this.numSecreto) {
            this.mensaje = 'Introduce un número menor';
          } else {
            this.mensaje = 'Introduce un número mayor';
          }
        }
      } else {
        this.mensaje = 'Introduce un número entre 0 y 100';
      }
    }
    this.intentos++;
  }
}
