import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMerge],svg[lucide-merge]',
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
  template: `<svg:path d="m8 6 4-4 4 4"></svg:path>
    <svg:path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></svg:path>
    <svg:path d="m20 22-5-5"></svg:path>`,
})
export class LucideMerge {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
