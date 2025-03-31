import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIndianRupee],svg[lucide-indian-rupee]',
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
    <svg:path d="M6 3h12" />
    <svg:path d="M6 8h12" />
    <svg:path d="m6 13 8.5 8" />
    <svg:path d="M6 13h3" />
    <svg:path d="M9 13c6.667 0 6.667-10 0-10" />
  `,
})
export class LucideIndianRupee {
  readonly class = input('lucide lucide-indian-rupee');
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
