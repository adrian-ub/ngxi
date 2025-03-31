import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarDays],svg[lucide-calendar-days]',
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
  template: `<svg:path d="M8 2v4"></svg:path>
    <svg:path d="M16 2v4"></svg:path>
    <svg:rect width="18" height="18" x="3" y="4" rx="2"></svg:rect>
    <svg:path d="M3 10h18"></svg:path>
    <svg:path d="M8 14h.01"></svg:path>
    <svg:path d="M12 14h.01"></svg:path>
    <svg:path d="M16 14h.01"></svg:path>
    <svg:path d="M8 18h.01"></svg:path>
    <svg:path d="M12 18h.01"></svg:path>
    <svg:path d="M16 18h.01"></svg:path>`,
})
export class LucideCalendarDays {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
