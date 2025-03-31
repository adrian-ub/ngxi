import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarPlus],svg[lucide-calendar-plus]',
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
    <svg:path
      d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
    ></svg:path>
    <svg:path d="M3 10h18"></svg:path>
    <svg:path d="M16 19h6"></svg:path>
    <svg:path d="M19 16v6"></svg:path>`,
})
export class LucideCalendarPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
