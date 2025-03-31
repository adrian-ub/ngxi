import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendar1],svg[lucide-calendar-1]',
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
  template: `<svg:path d="M11 14h1v4"></svg:path>
    <svg:path d="M16 2v4"></svg:path>
    <svg:path d="M3 10h18"></svg:path>
    <svg:path d="M8 2v4"></svg:path>
    <svg:rect x="3" y="4" width="18" height="18" rx="2"></svg:rect>`,
})
export class LucideCalendar1 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
