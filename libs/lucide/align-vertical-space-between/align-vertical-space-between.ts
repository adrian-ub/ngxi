import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalSpaceBetween],svg[lucide-align-vertical-space-between]',
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
    <svg:rect width="14" height="6" x="5" y="15" rx="2" />
    <svg:rect width="10" height="6" x="7" y="3" rx="2" />
    <svg:path d="M2 21h20" />
    <svg:path d="M2 3h20" />
  `,
})
export class LucideAlignVerticalSpaceBetween {
  readonly class = input('lucide lucide-align-vertical-space-between');
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
