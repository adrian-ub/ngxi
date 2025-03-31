import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHandPlatter],svg[lucide-hand-platter]',
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
  template: `<svg:path d="M12 3V2"></svg:path>
    <svg:path
      d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
    ></svg:path>
    <svg:path d="M2 14h12a2 2 0 0 1 0 4h-2"></svg:path>
    <svg:path d="M4 10h16"></svg:path>
    <svg:path d="M5 10a7 7 0 0 1 14 0"></svg:path>
    <svg:path d="M5 14v6a1 1 0 0 1-1 1H2"></svg:path>`,
})
export class LucideHandPlatter {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
