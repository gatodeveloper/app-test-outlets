import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './products/main/main.component'
import { AComponent } from './products/a/a.component'
import { CreateComponent } from './products/a/create/create.component'
import { ListComponent } from './products/a/list/list.component'
import { UploadComponent } from './products/b/upload/upload.component'
import { BComponent } from './products/b/b.component'
import { ListingComponent } from './products/listing/listing.component'
import { TabsComponent } from './products/tabs/tabs.component'

const routes: Routes = [
      {
        path: 'products',
        component: MainComponent,
        //pathMatch: 'full',
        children: [  
          {
            path: '',
            component: ListingComponent,
            outlet: 'listing',
            
          },
          {
            path: '',
            component: TabsComponent,
            outlet: 'tabs',
            children: [
              {
                path: '',
                component: AComponent,
              },
              {
                path: 'a',
                component: AComponent,
                children: [
                  {
                    path: '',
                    component: ListComponent,
                  },
                  {
                    path: 'create',
                    component: CreateComponent,
                  }
                ]
              },
              {
                path: 'b',
                component: BComponent,
                children: [
                  {
                    path: 'upload',
                    component: UploadComponent,
                  }
                ]
              }
            ]
          },
          {
            path: 'b',
            component: BComponent,
            //outlet: 'tabs'
          }
          
        ]
      },
      {
        path: 'products/detail',
        component: AComponent,
        children: [
          {
            path: '',
            component: ListComponent,
        }]
        //outlet: 'listing'
      },
      { path: '',   redirectTo: '/products', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
