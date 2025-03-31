import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSwords],svg[lucide-swords]',
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
    <svg:polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <svg:line x1="13" x2="19" y1="19" y2="13" />
    <svg:line x1="16" x2="20" y1="16" y2="20" />
    <svg:line x1="19" x2="21" y1="21" y2="19" />
    <svg:polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
    <svg:line x1="5" x2="9" y1="14" y2="18" />
    <svg:line x1="7" x2="4" y1="17" y2="20" />
    <svg:line x1="3" x2="5" y1="19" y2="21" />
  `,
})
export class LucideSwords {
  readonly class = input('lucide lucide-swords');
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
