import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLogIn],svg[lucide-log-in]',
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
  template: `<svg:path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></svg:path>
    <svg:polyline points="10 17 15 12 10 7"></svg:polyline>
    <svg:line x1="15" x2="3" y1="12" y2="12"></svg:line>`,
})
export class LucideLogIn {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
