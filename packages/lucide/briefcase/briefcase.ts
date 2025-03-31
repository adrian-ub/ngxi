import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcase],svg[lucide-briefcase]',
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
  template: `<svg:path
      d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    ></svg:path>
    <svg:rect width="20" height="14" x="2" y="6" rx="2"></svg:rect>`,
})
export class LucideBriefcase {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
