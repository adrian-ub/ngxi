import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCone],svg[lucide-cone]',
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
      d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
    ></svg:path>
    <svg:ellipse cx="12" cy="19" rx="9" ry="3"></svg:ellipse>`,
})
export class LucideCone {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
