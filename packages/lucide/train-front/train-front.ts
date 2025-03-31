import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainFront],svg[lucide-train-front]',
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
  template: `<svg:path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"></svg:path>
    <svg:path d="m9 15-1-1"></svg:path>
    <svg:path d="m15 15 1-1"></svg:path>
    <svg:path
      d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
    ></svg:path>
    <svg:path d="m8 19-2 3"></svg:path>
    <svg:path d="m16 19 2 3"></svg:path>`,
})
export class LucideTrainFront {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
