import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigationOff],svg[lucide-navigation-off]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
    <svg:path d="M17.39 11.73 22 2l-9.73 4.61" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideNavigationOff {
  readonly class = input('lucide lucide-navigation-off');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
