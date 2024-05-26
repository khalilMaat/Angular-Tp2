import { Component, OnInit } from '@angular/core';
import { CarteVisite } from './carte-visite';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit{
  carteVisite: CarteVisite = new CarteVisite();
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(): void {
  console.log(this.carteVisite);
  }
}
