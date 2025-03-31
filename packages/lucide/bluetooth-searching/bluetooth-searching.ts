import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothSearching],svg[lucide-bluetooth-searching]',
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
    <svg:path d="m7 7 10 10-5 5V2l5 5L7 17" />
    <svg:path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
    <svg:path d="M18 12h.01" />
  `,
})
export class LucideBluetoothSearching {
  readonly class = input('lucide lucide-bluetooth-searching');
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
