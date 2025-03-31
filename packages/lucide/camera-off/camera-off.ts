import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCameraOff],svg[lucide-camera-off]',
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
  template: `<svg:line x1="2" x2="22" y1="2" y2="22"></svg:line>
    <svg:path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"></svg:path>
    <svg:path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"></svg:path>
    <svg:path d="M14.121 15.121A3 3 0 1 1 9.88 10.88"></svg:path>`,
})
export class LucideCameraOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
