import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareUser],svg[lucide-square-user]',
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
  template: `<svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect>
    <svg:circle cx="12" cy="10" r="3"></svg:circle>
    <svg:path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></svg:path>`,
})
export class LucideSquareUser {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
