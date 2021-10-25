import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { InterviewComponent } from './components/interview/interview.component';

const routes: Routes = [
  {
    path: 'interview',
    component: InterviewComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateDetailsRoutingModule {}
