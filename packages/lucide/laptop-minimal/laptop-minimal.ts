import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimal],svg[lucide-laptop-minimal]',
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
  template: `<svg:rect
      width="18"
      height="12"
      x="3"
      y="4"
      rx="2"
      ry="2"
    ></svg:rect>
    <svg:line x1="2" x2="22" y1="20" y2="20"></svg:line>`,
})
export class LucideLaptopMinimal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
