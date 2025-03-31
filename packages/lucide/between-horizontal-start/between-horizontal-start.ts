import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideBetweenHorizontalStart],svg[lucide-between-horizontal-start]',
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
  template: `<svg:rect width="13" height="7" x="8" y="3" rx="1"></svg:rect>
    <svg:path d="m2 9 3 3-3 3"></svg:path>
    <svg:rect width="13" height="7" x="8" y="14" rx="1"></svg:rect>`,
})
export class LucideBetweenHorizontalStart {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
