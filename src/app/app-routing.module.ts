import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'movie-detail/:id', loadChildren: './pages/movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'person-detail/:id', loadChildren: './pages/person-detail/person-detail.module#PersonDetailPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
