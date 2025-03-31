import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBaggageClaim],svg[lucide-baggage-claim]',
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
    <svg:path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
    <svg:path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
    <svg:rect width="13" height="8" x="8" y="6" rx="1" />
    <svg:circle cx="18" cy="20" r="2" />
    <svg:circle cx="9" cy="20" r="2" />
  `,
})
export class LucideBaggageClaim {
  readonly class = input('lucide lucide-baggage-claim');
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
