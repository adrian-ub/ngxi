import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockOpen],svg[lucide-lock-open]',
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
      height="11"
      x="3"
      y="11"
      rx="2"
      ry="2"
    ></svg:rect>
    <svg:path d="M7 11V7a5 5 0 0 1 9.9-1"></svg:path>`,
})
export class LucideLockOpen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
