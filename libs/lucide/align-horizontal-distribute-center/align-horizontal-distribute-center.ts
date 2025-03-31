import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalDistributeCenter],svg[lucide-align-horizontal-distribute-center]',
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
    <svg:rect width="6" height="14" x="4" y="5" rx="2" />
    <svg:rect width="6" height="10" x="14" y="7" rx="2" />
    <svg:path d="M17 22v-5" />
    <svg:path d="M17 7V2" />
    <svg:path d="M7 22v-3" />
    <svg:path d="M7 5V2" />
  `,
})
export class LucideAlignHorizontalDistributeCenter {
  readonly class = input('lucide lucide-align-horizontal-distribute-center');
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
