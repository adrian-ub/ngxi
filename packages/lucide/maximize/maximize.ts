import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMaximize],svg[lucide-maximize]',
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
  template: `<svg:path d="M8 3H5a2 2 0 0 0-2 2v3"></svg:path>
    <svg:path d="M21 8V5a2 2 0 0 0-2-2h-3"></svg:path>
    <svg:path d="M3 16v3a2 2 0 0 0 2 2h3"></svg:path>
    <svg:path d="M16 21h3a2 2 0 0 0 2-2v-3"></svg:path>`,
})
export class LucideMaximize {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
