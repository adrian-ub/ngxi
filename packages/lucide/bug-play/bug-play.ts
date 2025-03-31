import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBugPlay],svg[lucide-bug-play]',
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
      d="M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
    ></svg:path>
    <svg:path d="M14.12 3.88 16 2"></svg:path>
    <svg:path
      d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
    ></svg:path>
    <svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></svg:path>
    <svg:path d="M3 21c0-2.1 1.7-3.9 3.8-4"></svg:path>
    <svg:path d="M6 13H2"></svg:path>
    <svg:path d="M6.53 9C4.6 8.8 3 7.1 3 5"></svg:path>
    <svg:path d="m8 2 1.88 1.88"></svg:path>
    <svg:path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></svg:path>`,
})
export class LucideBugPlay {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
