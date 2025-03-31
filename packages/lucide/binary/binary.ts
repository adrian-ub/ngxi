import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBinary],svg[lucide-binary]',
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
    <svg:rect x="14" y="14" width="4" height="6" rx="2" />
    <svg:rect x="6" y="4" width="4" height="6" rx="2" />
    <svg:path d="M6 20h4" />
    <svg:path d="M14 10h4" />
    <svg:path d="M6 14h2v6" />
    <svg:path d="M14 4h2v6" />
  `,
})
export class LucideBinary {
  readonly class = input('lucide lucide-binary');
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
