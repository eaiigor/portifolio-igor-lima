import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Calcula o tempo entre dois meses ("AAAA-MM") e formata no idioma atual.
 * Sem data final, conta até o mês atual. Conta os meses de forma inclusiva,
 * como o LinkedIn: jan/2022 a jul/2023 = 1 ano e 7 meses.
 *
 * Também aceita um total de meses já calculado.
 *
 * Uso: {{ '2022-01' | duration }}  ou  {{ job.start | duration: job.end }}  ou  {{ 47 | duration }}
 */
@Pipe({ name: 'duration', pure: false })
export class DurationPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(start: string | number, end?: string | null): string {
    const total = typeof start === 'number' ? start : DurationPipe.months(start, end);
    const years = Math.floor(total / 12);
    const months = total % 12;
    const en = (this.translate.currentLang || this.translate.defaultLang) === 'en';

    const y = years === 0 ? '' : en ? `${years} ${years === 1 ? 'yr' : 'yrs'}` : `${years} ${years === 1 ? 'ano' : 'anos'}`;
    const m = months === 0 ? '' : en ? `${months} ${months === 1 ? 'mo' : 'mos'}` : `${months} ${months === 1 ? 'mês' : 'meses'}`;

    if (y && m) {
      return en ? `${y} ${m}` : `${y} e ${m}`;
    }
    return y || m || (en ? '1 mo' : '1 mês');
  }

  static months(start: string, end?: string | null): number {
    const [sy, sm] = start.split('-').map(Number);
    const now = new Date();
    const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
    return Math.max(1, (ey * 12 + em) - (sy * 12 + sm) + 1);
  }
}
