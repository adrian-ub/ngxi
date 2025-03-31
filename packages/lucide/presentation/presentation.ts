import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePresentation],svg[lucide-presentation]',
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
  template: `<svg:path d="M2 3h20"></svg:path>
    <svg:path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></svg:path>
    <svg:path d="m7 21 5-5 5 5"></svg:path>`,
})
export class LucidePresentation {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
