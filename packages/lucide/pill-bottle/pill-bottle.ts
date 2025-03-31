import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePillBottle],svg[lucide-pill-bottle]',
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
  template: `<svg:path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"></svg:path>
    <svg:path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></svg:path>
    <svg:rect width="16" height="5" x="4" y="2" rx="1"></svg:rect>`,
})
export class LucidePillBottle {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
