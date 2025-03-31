import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideOrbit],svg[lucide-orbit]',
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
    <svg:circle cx="12" cy="12" r="3" />
    <svg:circle cx="19" cy="5" r="2" />
    <svg:circle cx="5" cy="19" r="2" />
    <svg:path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
    <svg:path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
  `,
})
export class LucideOrbit {
  readonly class = input('lucide lucide-orbit');
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
