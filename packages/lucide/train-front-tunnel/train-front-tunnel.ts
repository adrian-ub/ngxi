import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainFrontTunnel],svg[lucide-train-front-tunnel]',
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
  template: `<svg:path d="M2 22V12a10 10 0 1 1 20 0v10"></svg:path>
    <svg:path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"></svg:path>
    <svg:path d="M10 15h.01"></svg:path>
    <svg:path d="M14 15h.01"></svg:path>
    <svg:path
      d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
    ></svg:path>
    <svg:path d="m9 19-2 3"></svg:path>
    <svg:path d="m15 19 2 3"></svg:path>`,
})
export class LucideTrainFrontTunnel {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
