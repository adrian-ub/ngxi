import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMove3d],svg[lucide-move-3d]',
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
  template: `<svg:path d="M5 3v16h16"></svg:path>
    <svg:path d="m5 19 6-6"></svg:path>
    <svg:path d="m2 6 3-3 3 3"></svg:path>
    <svg:path d="m18 16 3 3-3 3"></svg:path>`,
})
export class LucideMove3d {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
