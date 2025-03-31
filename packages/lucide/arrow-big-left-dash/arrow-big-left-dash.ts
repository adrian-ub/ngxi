import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigLeftDash],svg[lucide-arrow-big-left-dash]',
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
  template: `<svg:path d="M19 15V9"></svg:path>
    <svg:path d="M15 15h-3v4l-7-7 7-7v4h3v6z"></svg:path>`,
})
export class LucideArrowBigLeftDash {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
