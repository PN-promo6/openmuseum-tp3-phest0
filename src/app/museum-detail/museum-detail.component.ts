import { Component, OnInit } from '@angular/core';
import { MuseumListService } from "../services/museumList.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumTitle:string = "titre musée";
  adress:string = "adress";
  ville:string = "ville";
  codePostal:string = "code postal";
  tel:string = "tel";
  webPage:string = "page web";
  ouverturePeriode:string = "periode ouverture";

  constructor(private museumListService: MuseumListService, private route:ActivatedRoute) { }

  ngOnInit() {
    const ref_musee = this.route.snapshot.params['ref_musee'];
    this.museumTitle = this.museumListService.getMuseumByRef_musee(ref_musee).nom_du_musee;
    this.adress = this.museumListService.getMuseumByRef_musee(ref_musee).adr;
  }

}
