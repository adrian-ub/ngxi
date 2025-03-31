import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadar],svg[lucide-radar]',
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
  template: `<svg:path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></svg:path>
    <svg:path d="M4 6h.01"></svg:path>
    <svg:path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></svg:path>
    <svg:path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></svg:path>
    <svg:path d="M12 18h.01"></svg:path>
    <svg:path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></svg:path>
    <svg:circle cx="12" cy="12" r="2"></svg:circle>
    <svg:path d="m13.41 10.59 5.66-5.66"></svg:path>`,
})
export class LucideRadar {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
