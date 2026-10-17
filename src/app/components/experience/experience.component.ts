import { Component } from '@angular/core';
import { JOBS } from '../../shared/jobs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  readonly jobs = JOBS;
}
