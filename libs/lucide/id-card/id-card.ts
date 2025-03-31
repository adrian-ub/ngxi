import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIdCard],svg[lucide-id-card]',
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
    <svg:path d="M16 10h2" />
    <svg:path d="M16 14h2" />
    <svg:path d="M6.17 15a3 3 0 0 1 5.66 0" />
    <svg:circle cx="9" cy="11" r="2" />
    <svg:rect x="2" y="5" width="20" height="14" rx="2" />
  `,
})
export class LucideIdCard {
  readonly class = input('lucide lucide-id-card');
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
