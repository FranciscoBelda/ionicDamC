import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../lists/lists.module').then( m => m.ListsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../cards/cards.module').then( m => m.CardsPageModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
