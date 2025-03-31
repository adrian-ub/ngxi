import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextSearch],svg[lucide-text-search]',
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
  template: `<svg:path d="M21 6H3"></svg:path>
    <svg:path d="M10 12H3"></svg:path>
    <svg:path d="M10 18H3"></svg:path>
    <svg:circle cx="17" cy="15" r="3"></svg:circle>
    <svg:path d="m21 19-1.9-1.9"></svg:path>`,
})
export class LucideTextSearch {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
