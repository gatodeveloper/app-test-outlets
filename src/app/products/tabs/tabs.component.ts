import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

  private routedComponent: AComponent;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  goToDetail(component){
    //this.router.navigate(['a'], {relativeTo: this.route})
    //this.router.navigate(['a'], { skipLocationChange: true, relativeTo: this.route})
    this.router.navigate(['products', {outlets: {tabs: component}}])
    //this.router.navigate(['a', {outlets: {panel: 'tabs'}}], { relativeTo: this.route})
  }


  public setRoutedComponent(componentRef: AComponent){
    debugger;
    this.routedComponent = componentRef;
  }

}
