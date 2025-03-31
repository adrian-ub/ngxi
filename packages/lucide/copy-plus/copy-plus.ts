import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyPlus],svg[lucide-copy-plus]',
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
  template: `<svg:line x1="15" x2="15" y1="12" y2="18"></svg:line>
    <svg:line x1="12" x2="18" y1="15" y2="15"></svg:line>
    <svg:rect width="14" height="14" x="8" y="8" rx="2" ry="2"></svg:rect>
    <svg:path
      d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
    ></svg:path>`,
})
export class LucideCopyPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
