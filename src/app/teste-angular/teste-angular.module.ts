import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteStructuralDirectivesComponent } from './teste-structural-directives/teste-structural-directives.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TesteStructuralDirectivesComponent}
];

@NgModule({
  declarations: [TesteStructuralDirectivesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TesteAngularModule { }
