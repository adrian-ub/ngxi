import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSwitchCamera],svg[lucide-switch-camera]',
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
  template: `<svg:path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></svg:path>
    <svg:path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"></svg:path>
    <svg:circle cx="12" cy="12" r="3"></svg:circle>
    <svg:path d="m18 22-3-3 3-3"></svg:path>
    <svg:path d="m6 2 3 3-3 3"></svg:path>`,
})
export class LucideSwitchCamera {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
