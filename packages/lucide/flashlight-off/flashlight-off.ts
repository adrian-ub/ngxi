import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlashlightOff],svg[lucide-flashlight-off]',
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
  template: `<svg:path
      d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
    ></svg:path>
    <svg:path d="M7 2h11v4c0 2-2 2-2 4v1"></svg:path>
    <svg:line x1="11" x2="18" y1="6" y2="6"></svg:line>
    <svg:line x1="2" x2="22" y1="2" y2="22"></svg:line>`,
})
export class LucideFlashlightOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
