import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWaypoints],svg[lucide-waypoints]',
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
  template: `<svg:circle cx="12" cy="4.5" r="2.5"></svg:circle>
    <svg:path d="m10.2 6.3-3.9 3.9"></svg:path>
    <svg:circle cx="4.5" cy="12" r="2.5"></svg:circle>
    <svg:path d="M7 12h10"></svg:path>
    <svg:circle cx="19.5" cy="12" r="2.5"></svg:circle>
    <svg:path d="m13.8 17.7 3.9-3.9"></svg:path>
    <svg:circle cx="12" cy="19.5" r="2.5"></svg:circle>`,
})
export class LucideWaypoints {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
