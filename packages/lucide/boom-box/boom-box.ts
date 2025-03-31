import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBoomBox],svg[lucide-boom-box]',
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
    <svg:path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <svg:path d="M8 8v1" />
    <svg:path d="M12 8v1" />
    <svg:path d="M16 8v1" />
    <svg:rect width="20" height="12" x="2" y="9" rx="2" />
    <svg:circle cx="8" cy="15" r="2" />
    <svg:circle cx="16" cy="15" r="2" />
  `,
})
export class LucideBoomBox {
  readonly class = input('lucide lucide-boom-box');
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
