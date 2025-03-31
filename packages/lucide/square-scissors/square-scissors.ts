import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareScissors],svg[lucide-square-scissors]',
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
  template: `<svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect>
    <svg:circle cx="8" cy="8" r="2"></svg:circle>
    <svg:path d="M9.414 9.414 12 12"></svg:path>
    <svg:path d="M14.8 14.8 18 18"></svg:path>
    <svg:circle cx="8" cy="16" r="2"></svg:circle>
    <svg:path d="m18 6-8.586 8.586"></svg:path>`,
})
export class LucideSquareScissors {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
