import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMinimize],svg[lucide-minimize]',
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
  template: `<svg:path d="M8 3v3a2 2 0 0 1-2 2H3"></svg:path>
    <svg:path d="M21 8h-3a2 2 0 0 1-2-2V3"></svg:path>
    <svg:path d="M3 16h3a2 2 0 0 1 2 2v3"></svg:path>
    <svg:path d="M16 21v-3a2 2 0 0 1 2-2h3"></svg:path>`,
})
export class LucideMinimize {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
