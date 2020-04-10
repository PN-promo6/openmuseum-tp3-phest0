import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  museums: any[];
  constructor(private museumListService: MuseumListService) {

  }

  ngOnInit() {
    this.museums = this.museumListService.museums
  }

}
