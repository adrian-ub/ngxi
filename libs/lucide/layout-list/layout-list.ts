import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutList],svg[lucide-layout-list]',
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
    <svg:rect width="7" height="7" x="3" y="3" rx="1" />
    <svg:rect width="7" height="7" x="3" y="14" rx="1" />
    <svg:path d="M14 4h7" />
    <svg:path d="M14 9h7" />
    <svg:path d="M14 15h7" />
    <svg:path d="M14 20h7" />
  `,
})
export class LucideLayoutList {
  readonly class = input('lucide lucide-layout-list');
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
