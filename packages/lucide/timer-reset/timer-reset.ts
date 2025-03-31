import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTimerReset],svg[lucide-timer-reset]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path d="M10 2h4"></svg:path>
    <svg:path d="M12 14v-4"></svg:path>
    <svg:path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"></svg:path>
    <svg:path d="M9 17H4v5"></svg:path>`,
})
export class LucideTimerReset {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
