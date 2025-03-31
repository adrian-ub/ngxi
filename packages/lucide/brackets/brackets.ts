import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBrackets],svg[lucide-brackets]',
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
  template: `<svg:path d="M16 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2"></svg:path>
    <svg:path d="M8 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2"></svg:path>`,
})
export class LucideBrackets {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
