import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUmbrellaOff],svg[lucide-umbrella-off]',
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
  template: `<svg:path d="M12 2v1"></svg:path>
    <svg:path
      d="M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"
    ></svg:path>
    <svg:path d="M17.5 12H22A10 10 0 0 0 9.004 3.455"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>`,
})
export class LucideUmbrellaOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
