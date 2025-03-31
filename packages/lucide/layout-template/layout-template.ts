import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutTemplate],svg[lucide-layout-template]',
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
  template: `<svg:rect width="18" height="7" x="3" y="3" rx="1"></svg:rect>
    <svg:rect width="9" height="7" x="3" y="14" rx="1"></svg:rect>
    <svg:rect width="5" height="7" x="16" y="14" rx="1"></svg:rect>`,
})
export class LucideLayoutTemplate {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
