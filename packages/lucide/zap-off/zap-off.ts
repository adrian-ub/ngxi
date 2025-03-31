import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideZapOff],svg[lucide-zap-off]',
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
  template: `<svg:path
      d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"
    ></svg:path>
    <svg:path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"></svg:path>
    <svg:path
      d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
    ></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>`,
})
export class LucideZapOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
