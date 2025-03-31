import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHand],svg[lucide-hand]',
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
  template: `<svg:path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></svg:path>
    <svg:path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></svg:path>
    <svg:path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></svg:path>
    <svg:path
      d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    ></svg:path>`,
})
export class LucideHand {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
