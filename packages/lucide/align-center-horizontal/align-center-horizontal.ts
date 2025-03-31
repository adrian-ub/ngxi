import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignCenterHorizontal],svg[lucide-align-center-horizontal]',
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
  template: `<svg:path d="M2 12h20"></svg:path>
    <svg:path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"></svg:path>
    <svg:path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"></svg:path>
    <svg:path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"></svg:path>
    <svg:path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class LucideAlignCenterHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
