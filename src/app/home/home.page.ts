import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor() {}

  page = "メインページ"

  private comandos = 
  [
    {
      id: 0,
      name:'Comando #1',
      desc: 'Comando 1: descricion'
    },
    {
      id: 1,
      name:'Comando #2',
      desc: 'Comando 2: descricion'
    }
  ]

}