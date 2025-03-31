import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigation2Off],svg[lucide-navigation-2-off]',
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
    <svg:path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
    <svg:path d="M14.53 8.88 12 2l-1.17 3.17" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideNavigation2Off {
  readonly class = input('lucide lucide-navigation-2-off');
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
