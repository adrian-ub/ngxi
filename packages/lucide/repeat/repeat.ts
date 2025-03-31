import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat],svg[lucide-repeat]',
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
  template: `<svg:path d="m17 2 4 4-4 4"></svg:path>
    <svg:path d="M3 11v-1a4 4 0 0 1 4-4h14"></svg:path>
    <svg:path d="m7 22-4-4 4-4"></svg:path>
    <svg:path d="M21 13v1a4 4 0 0 1-4 4H3"></svg:path>`,
})
export class LucideRepeat {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
