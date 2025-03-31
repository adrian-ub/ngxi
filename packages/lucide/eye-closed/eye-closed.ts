import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEyeClosed],svg[lucide-eye-closed]',
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
    <svg:path d="m15 18-.722-3.25" />
    <svg:path d="M2 8a10.645 10.645 0 0 0 20 0" />
    <svg:path d="m20 15-1.726-2.05" />
    <svg:path d="m4 15 1.726-2.05" />
    <svg:path d="m9 18 .722-3.25" />
  `,
})
export class LucideEyeClosed {
  readonly class = input('lucide lucide-eye-closed');
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
