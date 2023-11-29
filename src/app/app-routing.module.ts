import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'grid-buttons',
    loadChildren: () => import('./pages/grid-buttons/grid-buttons.module').then( m => m.GridButtonsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'slides2',
    loadChildren: () => import('./pages/slides2/slides2.module').then( m => m.Slides2PageModule)
  },
  {
    path: 'lists',
    loadChildren: () => import('./pages/lists/lists.module').then( m => m.ListsPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'infinite-scroll2',
    loadChildren: () => import('./pages/infinite-scroll2/infinite-scroll2.module').then( m => m.InfiniteScroll2PageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'searchable-select',
    loadChildren: () => import('./pages/searchable-select/searchable-select.module').then( m => m.SearchableSelectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
