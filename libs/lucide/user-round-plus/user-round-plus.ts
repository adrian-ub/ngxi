import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundPlus],svg[lucide-user-round-plus]',
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
    <svg:path d="M2 21a8 8 0 0 1 13.292-6" />
    <svg:circle cx="10" cy="8" r="5" />
    <svg:path d="M19 16v6" />
    <svg:path d="M22 19h-6" />
  `,
})
export class LucideUserRoundPlus {
  readonly class = input('lucide lucide-user-round-plus');
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
