import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  goToListing(){
    this.router.navigate(['products', {outlets: {tabs: 'a'}}])
  }

}
