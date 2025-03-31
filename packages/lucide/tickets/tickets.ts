import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTickets],svg[lucide-tickets]',
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
    <svg:path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
    <svg:path d="M6 10V8" />
    <svg:path d="M6 14v1" />
    <svg:path d="M6 19v2" />
    <svg:rect x="2" y="8" width="20" height="13" rx="2" />
  `,
})
export class LucideTickets {
  readonly class = input('lucide lucide-tickets');
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
