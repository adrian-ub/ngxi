import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVibrate],svg[lucide-vibrate]',
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
  template: `<svg:path d="m2 8 2 2-2 2 2 2-2 2"></svg:path>
    <svg:path d="m22 8-2 2 2 2-2 2 2 2"></svg:path>
    <svg:rect width="8" height="14" x="8" y="5" rx="1"></svg:rect>`,
})
export class LucideVibrate {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
