import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserX],svg[lucide-user-x]',
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
  template: `<svg:path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></svg:path>
    <svg:circle cx="9" cy="7" r="4"></svg:circle>
    <svg:line x1="17" x2="22" y1="8" y2="13"></svg:line>
    <svg:line x1="22" x2="17" y1="8" y2="13"></svg:line>`,
})
export class LucideUserX {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
