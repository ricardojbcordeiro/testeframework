import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimengModule} from './primeng/primeng.module';


const routes: Routes = [
  {
    path: 'primeNG',
    loadChildren: () => import('./primeng/primeng.module')
        .then(m => m.PrimengModule)
  },
  {
    path: 'testeAngular',
    loadChildren: () => import('./teste-angular/teste-angular.module')
        .then(m => m.TesteAngularModule)
  }
];

@NgModule({
  imports: [PrimengModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/**
 * 
 */
export class AppRoutingModule { }
