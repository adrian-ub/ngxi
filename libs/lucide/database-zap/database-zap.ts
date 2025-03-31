import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseZap],svg[lucide-database-zap]',
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
    <svg:ellipse cx="12" cy="5" rx="9" ry="3" />
    <svg:path d="M3 5V19A9 3 0 0 0 15 21.84" />
    <svg:path d="M21 5V8" />
    <svg:path d="M21 12L18 17H22L19 22" />
    <svg:path d="M3 12A9 3 0 0 0 14.59 14.87" />
  `,
})
export class LucideDatabaseZap {
  readonly class = input('lucide lucide-database-zap');
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
