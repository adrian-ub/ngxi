import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmClockOff],svg[lucide-alarm-clock-off]',
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
    <svg:path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
    <svg:path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
    <svg:path d="m22 6-3-3" />
    <svg:path d="M6.26 18.67 4 21" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M4 4 2 6" />
  `,
})
export class LucideAlarmClockOff {
  readonly class = input('lucide lucide-alarm-clock-off');
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
