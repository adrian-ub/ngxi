import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScissorsLineDashed],svg[lucide-scissors-line-dashed]',
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
    <svg:path d="M5.42 9.42 8 12" />
    <svg:circle cx="4" cy="8" r="2" />
    <svg:path d="m14 6-8.58 8.58" />
    <svg:circle cx="4" cy="16" r="2" />
    <svg:path d="M10.8 14.8 14 18" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
  `,
})
export class LucideScissorsLineDashed {
  readonly class = input('lucide lucide-scissors-line-dashed');
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
