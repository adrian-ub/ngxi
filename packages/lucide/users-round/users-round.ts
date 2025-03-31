import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUsersRound],svg[lucide-users-round]',
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
  template: `<svg:path d="M18 21a8 8 0 0 0-16 0"></svg:path>
    <svg:circle cx="10" cy="8" r="5"></svg:circle>
    <svg:path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></svg:path>`,
})
export class LucideUsersRound {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
