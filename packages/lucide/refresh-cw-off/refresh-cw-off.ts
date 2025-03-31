import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCwOff],svg[lucide-refresh-cw-off]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path
      d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
    ></svg:path>
    <svg:path d="M8 16H3v5"></svg:path>
    <svg:path d="M3 12C3 9.51 4 7.26 5.64 5.64"></svg:path>
    <svg:path
      d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
    ></svg:path>
    <svg:path d="M21 12c0 1-.16 1.97-.47 2.87"></svg:path>
    <svg:path d="M21 3v5h-5"></svg:path>
    <svg:path d="M22 22 2 2"></svg:path>`,
})
export class LucideRefreshCwOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
