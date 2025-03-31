import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMails],svg[lucide-mails]',
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
  template: `<svg:rect width="16" height="13" x="6" y="4" rx="2"></svg:rect>
    <svg:path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"></svg:path>
    <svg:path d="M2 8v11c0 1.1.9 2 2 2h14"></svg:path>`,
})
export class LucideMails {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
