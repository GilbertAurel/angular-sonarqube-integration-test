import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateDetailsRoutingModule } from './candidate-details-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [InterviewComponent, CvComponent],
  imports: [CommonModule, CandidateDetailsRoutingModule],
})
export class CandidateDetailsModule {}
