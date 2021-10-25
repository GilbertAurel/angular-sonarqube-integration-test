import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hiring-summary/candidate-details',
    loadChildren: () =>
      import('./modules/candidate-details/candidate-details.module').then(
        (m) => m.CandidateDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
