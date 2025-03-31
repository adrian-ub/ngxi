import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVenusAndMars],svg[lucide-venus-and-mars]',
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
    <svg:path d="M10 20h4" />
    <svg:path d="M12 16v6" />
    <svg:path d="M17 2h4v4" />
    <svg:path d="m21 2-5.46 5.46" />
    <svg:circle cx="12" cy="11" r="5" />
  `,
})
export class LucideVenusAndMars {
  readonly class = input('lucide lucide-venus-and-mars');
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
