import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareBottomDashedScissors],svg[lucide-square-bottom-dashed-scissors]',
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
      d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
    />
    <svg:path d="M10 22H8" />
    <svg:path d="M16 22h-2" />
    <svg:circle cx="8" cy="8" r="2" />
    <svg:path d="M9.414 9.414 12 12" />
    <svg:path d="M14.8 14.8 18 18" />
    <svg:circle cx="8" cy="16" r="2" />
    <svg:path d="m18 6-8.586 8.586" />
  `,
})
export class LucideSquareBottomDashedScissors {
  readonly class = input('lucide lucide-square-bottom-dashed-scissors');
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
