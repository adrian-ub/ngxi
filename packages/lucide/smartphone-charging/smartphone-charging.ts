import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSmartphoneCharging],svg[lucide-smartphone-charging]',
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
  template: `<svg:rect
      width="14"
      height="20"
      x="5"
      y="2"
      rx="2"
      ry="2"
    ></svg:rect>
    <svg:path d="M12.667 8 10 12h4l-2.667 4"></svg:path>`,
})
export class LucideSmartphoneCharging {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
