import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLink2Off],svg[lucide-link-2-off]',
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
    <svg:path d="M9 17H7A5 5 0 0 1 7 7" />
    <svg:path d="M15 7h2a5 5 0 0 1 4 8" />
    <svg:line x1="8" x2="12" y1="12" y2="12" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideLink2Off {
  readonly class = input('lucide lucide-link-2-off');
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
