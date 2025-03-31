import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePersonStanding],svg[lucide-person-standing]',
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
  template: `<svg:circle cx="12" cy="5" r="1"></svg:circle>
    <svg:path d="m9 20 3-6 3 6"></svg:path>
    <svg:path d="m6 8 6 2 6-2"></svg:path>
    <svg:path d="M12 10v4"></svg:path>`,
})
export class LucidePersonStanding {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
