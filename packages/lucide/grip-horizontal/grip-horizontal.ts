import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGripHorizontal],svg[lucide-grip-horizontal]',
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
    <svg:circle cx="12" cy="9" r="1" />
    <svg:circle cx="19" cy="9" r="1" />
    <svg:circle cx="5" cy="9" r="1" />
    <svg:circle cx="12" cy="15" r="1" />
    <svg:circle cx="19" cy="15" r="1" />
    <svg:circle cx="5" cy="15" r="1" />
  `,
})
export class LucideGripHorizontal {
  readonly class = input('lucide lucide-grip-horizontal');
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
