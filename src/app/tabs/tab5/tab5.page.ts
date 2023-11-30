import { Component, OnInit } from '@angular/core';

interface IValor {
  imagen: string;
  url: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valoresLista: IValor[] = [
    {
      imagen: 'BIRT_LOGO.png',
      url: 'http://birt.eus',
    },
    {
      imagen: 'easo_logo.png',
      url: 'http://easo.hezkuntza.net',
    },
    {
      imagen: 'nicolas_larburu_logo.jpg',
      url: 'http://nlarburu.hezkuntza.net',
    },
    {
      imagen: 'ciudad_jardin_logo.png',
      url: 'http://ciudadjardin.hezkuntza.net',
    },
  ];

}
