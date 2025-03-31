import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAmphora],svg[lucide-amphora]',
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
      d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"
    ></svg:path>
    <svg:path d="M10 5H8a2 2 0 0 0 0 4h.68"></svg:path>
    <svg:path
      d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"
    ></svg:path>
    <svg:path d="M14 5h2a2 2 0 0 1 0 4h-.68"></svg:path>
    <svg:path d="M18 22H6"></svg:path>
    <svg:path d="M9 2h6"></svg:path>`,
})
export class LucideAmphora {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
