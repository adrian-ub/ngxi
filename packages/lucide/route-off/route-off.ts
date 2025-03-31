import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRouteOff],svg[lucide-route-off]',
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
  template: `<svg:circle cx="6" cy="19" r="3"></svg:circle>
    <svg:path d="M9 19h8.5c.4 0 .9-.1 1.3-.2"></svg:path>
    <svg:path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3"></svg:path>
    <svg:path d="M15 5h-4.3"></svg:path>
    <svg:circle cx="18" cy="5" r="3"></svg:circle>`,
})
export class LucideRouteOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
