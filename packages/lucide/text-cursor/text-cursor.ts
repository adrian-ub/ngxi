import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextCursor],svg[lucide-text-cursor]',
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
  template: `<svg:path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"></svg:path>
    <svg:path d="M7 22h1a4 4 0 0 0 4-4v-1"></svg:path>
    <svg:path d="M7 2h1a4 4 0 0 1 4 4v1"></svg:path>`,
})
export class LucideTextCursor {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
