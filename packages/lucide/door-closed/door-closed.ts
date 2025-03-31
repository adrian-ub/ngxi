import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDoorClosed],svg[lucide-door-closed]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></svg:path>
    <svg:path d="M2 20h20"></svg:path>
    <svg:path d="M14 12v.01"></svg:path>`,
})
export class LucideDoorClosed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
