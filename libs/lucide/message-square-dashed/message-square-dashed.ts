import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareDashed],svg[lucide-message-square-dashed]',
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
    <svg:path d="M10 17H7l-4 4v-7" />
    <svg:path d="M14 17h1" />
    <svg:path d="M14 3h1" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M21 14v1a2 2 0 0 1-2 2" />
    <svg:path d="M21 9v1" />
    <svg:path d="M3 9v1" />
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M9 3h1" />
  `,
})
export class LucideMessageSquareDashed {
  readonly class = input('lucide lucide-message-square-dashed');
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
