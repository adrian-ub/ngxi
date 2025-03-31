import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideExpand],svg[lucide-expand]',
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
    <svg:path d="m15 15 6 6" />
    <svg:path d="m15 9 6-6" />
    <svg:path d="M21 16.2V21h-4.8" />
    <svg:path d="M21 7.8V3h-4.8" />
    <svg:path d="M3 16.2V21h4.8" />
    <svg:path d="m3 21 6-6" />
    <svg:path d="M3 7.8V3h4.8" />
    <svg:path d="M9 9 3 3" />
  `,
})
export class LucideExpand {
  readonly class = input('lucide lucide-expand');
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
