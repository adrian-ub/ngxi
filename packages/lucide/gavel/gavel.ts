import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGavel],svg[lucide-gavel]',
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
  template: `<svg:path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></svg:path>
    <svg:path d="m16 16 6-6"></svg:path>
    <svg:path d="m8 8 6-6"></svg:path>
    <svg:path d="m9 7 8 8"></svg:path>
    <svg:path d="m21 11-8-8"></svg:path>`,
})
export class LucideGavel {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
