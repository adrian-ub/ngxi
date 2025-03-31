import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrab],svg[lucide-grab]',
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
      d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
    ></svg:path>
    <svg:path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></svg:path>
    <svg:path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></svg:path>
    <svg:path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></svg:path>
    <svg:path
      d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
    ></svg:path>`,
})
export class LucideGrab {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
