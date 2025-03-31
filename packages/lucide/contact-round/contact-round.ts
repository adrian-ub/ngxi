import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContactRound],svg[lucide-contact-round]',
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
  template: `<svg:path d="M16 2v2"></svg:path>
    <svg:path d="M17.915 22a6 6 0 0 0-12 0"></svg:path>
    <svg:path d="M8 2v2"></svg:path>
    <svg:circle cx="12" cy="12" r="4"></svg:circle>
    <svg:rect x="3" y="4" width="18" height="18" rx="2"></svg:rect>`,
})
export class LucideContactRound {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
