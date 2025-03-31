import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAngry],svg[lucide-angry]',
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
  template: `<svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:path d="M16 16s-1.5-2-4-2-4 2-4 2"></svg:path>
    <svg:path d="M7.5 8 10 9"></svg:path>
    <svg:path d="m14 9 2.5-1"></svg:path>
    <svg:path d="M9 10h.01"></svg:path>
    <svg:path d="M15 10h.01"></svg:path>`,
})
export class LucideAngry {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
