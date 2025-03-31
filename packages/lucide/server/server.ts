import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServer],svg[lucide-server]',
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
    <svg:rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <svg:rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <svg:line x1="6" x2="6.01" y1="6" y2="6" />
    <svg:line x1="6" x2="6.01" y1="18" y2="18" />
  `,
})
export class LucideServer {
  readonly class = input('lucide lucide-server');
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
