import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLifeBuoy],svg[lucide-life-buoy]',
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
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m4.93 4.93 4.24 4.24" />
    <svg:path d="m14.83 9.17 4.24-4.24" />
    <svg:path d="m14.83 14.83 4.24 4.24" />
    <svg:path d="m9.17 14.83-4.24 4.24" />
    <svg:circle cx="12" cy="12" r="4" />
  `,
})
export class LucideLifeBuoy {
  readonly class = input('lucide lucide-life-buoy');
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
