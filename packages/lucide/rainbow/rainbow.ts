import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRainbow],svg[lucide-rainbow]',
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
  template: `<svg:path d="M22 17a10 10 0 0 0-20 0"></svg:path>
    <svg:path d="M6 17a6 6 0 0 1 12 0"></svg:path>
    <svg:path d="M10 17a2 2 0 0 1 4 0"></svg:path>`,
})
export class LucideRainbow {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
