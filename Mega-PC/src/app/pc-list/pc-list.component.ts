import { Component, OnInit } from '@angular/core';
import { Pc } from './Pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PCListComponent implements OnInit {

  pcs: Pc[] = [
    {
      img: 'assets/img/pc.jpg',
      nombre:'amd A10',
      desc:'',
      precio: 0, //esta como string
      addToCart:'agregar', //esta como string en Pc.ts
      stock: 30,
      clearance: false, //buena practica para algo de git diff min 38 clase 3
    },
    {
      img: 'assets/img/pc.jpg',
      nombre:'Intel Celeron',
      desc:'',
      precio: 0, //esta como string
      addToCart:'agregar', //esta como string en Pc.ts
      stock: 30,
      clearance: true,
    },
    {
      img: 'assets/img/pc.jpg',
      nombre:' Intel Pentium',
      desc:'',
      precio: 0, //esta como string
      addToCart:'agregar', //esta como string en Pc.ts
      stock: 30,
      clearance: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
