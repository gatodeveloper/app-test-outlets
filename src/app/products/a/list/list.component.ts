import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(
  	public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  goToCreate(){
  	this.router.navigate(['products', {outlets: {tabs: 'a/create'}}])
  }
}
