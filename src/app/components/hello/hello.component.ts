import { Component } from '@angular/core';
import { DurationPipe } from '../../shared/duration.pipe';
import { JOBS } from '../../shared/jobs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  readonly companies = JOBS.length;

  // Soma só os meses trabalhados (sem os intervalos entre empregos e sem contar duas vezes o mês de troca).
  get monthsWorked(): number {
    const months = new Set<number>();
    for (const job of JOBS) {
      const [y, m] = job.start.split('-').map(Number);
      const first = y * 12 + m;
      const count = DurationPipe.months(job.start, job.end);
      for (let i = 0; i < count; i++) months.add(first + i);
    }
    return months.size;
  }
}
