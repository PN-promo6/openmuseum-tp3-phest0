import { Component, Input, OnInit } from '@angular/core';
import { MuseumListService } from "../services/museumList.service";

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {
// variables
@Input() museumTitle:string;
@Input() adress:string;
@Input() ville:string;
@Input() codePostal:string;
@Input() tel:string;
@Input() webPage:string;
@Input() ouverturePeriode:string;

getMuseumTitle() {
  return this.museumTitle;
}
  constructor(private museumListService: MuseumListService) {
  }

  ngOnInit() {
  }

}
