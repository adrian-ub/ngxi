import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGroup],svg[lucide-group]',
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
  template: `<svg:path d="M3 7V5c0-1.1.9-2 2-2h2"></svg:path>
    <svg:path d="M17 3h2c1.1 0 2 .9 2 2v2"></svg:path>
    <svg:path d="M21 17v2c0 1.1-.9 2-2 2h-2"></svg:path>
    <svg:path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></svg:path>
    <svg:rect width="7" height="5" x="7" y="7" rx="1"></svg:rect>
    <svg:rect width="7" height="5" x="10" y="12" rx="1"></svg:rect>`,
})
export class LucideGroup {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
