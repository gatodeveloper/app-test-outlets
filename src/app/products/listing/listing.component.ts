import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router'; 

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})
export class ListingComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  goToDetail(id){
    //this.router.navigate(['detail'])
    this.router.navigate(['detail'], { relativeTo: this.route})
    //this.router.navigate(['detail', {outlets: {panel: 'listing'}}], { relativeTo: this.route})
  }

}
