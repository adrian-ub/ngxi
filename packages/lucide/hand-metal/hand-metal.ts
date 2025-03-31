import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHandMetal],svg[lucide-hand-metal]',
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
      d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
    ></svg:path>
    <svg:path d="M14 11V9a2 2 0 1 0-4 0v2"></svg:path>
    <svg:path d="M10 10.5V5a2 2 0 1 0-4 0v9"></svg:path>
    <svg:path
      d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
    ></svg:path>`,
})
export class LucideHandMetal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
