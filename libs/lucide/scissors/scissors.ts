import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScissors],svg[lucide-scissors]',
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
    <svg:circle cx="6" cy="6" r="3" />
    <svg:path d="M8.12 8.12 12 12" />
    <svg:path d="M20 4 8.12 15.88" />
    <svg:circle cx="6" cy="18" r="3" />
    <svg:path d="M14.8 14.8 20 20" />
  `,
})
export class LucideScissors {
  readonly class = input('lucide lucide-scissors');
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
