import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVibrateOff],svg[lucide-vibrate-off]',
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
    <svg:path d="m2 8 2 2-2 2 2 2-2 2" />
    <svg:path d="m22 8-2 2 2 2-2 2 2 2" />
    <svg:path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
    <svg:path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideVibrateOff {
  readonly class = input('lucide lucide-vibrate-off');
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
