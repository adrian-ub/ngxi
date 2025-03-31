import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLocate],svg[lucide-locate]',
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
  template: `<svg:line x1="2" x2="5" y1="12" y2="12"></svg:line>
    <svg:line x1="19" x2="22" y1="12" y2="12"></svg:line>
    <svg:line x1="12" x2="12" y1="2" y2="5"></svg:line>
    <svg:line x1="12" x2="12" y1="19" y2="22"></svg:line>
    <svg:circle cx="12" cy="12" r="7"></svg:circle>`,
})
export class LucideLocate {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
