import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideALargeSmall],svg[lucide-a-large-small]',
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
  template: `<svg:path d="M21 14h-5"></svg:path>
    <svg:path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"></svg:path>
    <svg:path d="M4.5 13h6"></svg:path>
    <svg:path d="m3 16 4.5-9 4.5 9"></svg:path>`,
})
export class LucideALargeSmall {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
