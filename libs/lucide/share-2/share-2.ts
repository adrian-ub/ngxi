import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShare2],svg[lucide-share-2]',
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
    <svg:circle cx="18" cy="5" r="3" />
    <svg:circle cx="6" cy="12" r="3" />
    <svg:circle cx="18" cy="19" r="3" />
    <svg:line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <svg:line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  `,
})
export class LucideShare2 {
  readonly class = input('lucide lucide-share-2');
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
