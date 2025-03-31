import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarOff],svg[lucide-calendar-off]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path
      d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
    />
    <svg:path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
    <svg:path d="M16 2v4" />
    <svg:path d="M3 10h7" />
    <svg:path d="M21 10h-5.5" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideCalendarOff {
  readonly class = input('lucide lucide-calendar-off');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
