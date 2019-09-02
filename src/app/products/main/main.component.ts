import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    ) { }

  ngOnInit() {
  }

  goTo(panel){
    //this.router.navigate([{outlets: { all: ['a:a']}}], { skipLocationChange: true , relativeTo: this.route})
    //this.router.navigate(['a', {outlets: { panel: panel}, relativeTo: this.route}])
    //this.router.navigate(['a', {outlets: { panel: panel}}], {relativeTo: this.route})
    //this.router.navigate(['a', {outlets: { panel: panel}}], { skipLocationChange: true , relativeTo: this.route})
    this.router.navigate(['a'], { relativeTo: this.route})
  }

}
