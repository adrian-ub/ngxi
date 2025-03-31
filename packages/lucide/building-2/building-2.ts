import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBuilding2],svg[lucide-building-2]',
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
  template: `<svg:path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></svg:path>
    <svg:path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></svg:path>
    <svg:path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></svg:path>
    <svg:path d="M10 6h4"></svg:path>
    <svg:path d="M10 10h4"></svg:path>
    <svg:path d="M10 14h4"></svg:path>
    <svg:path d="M10 18h4"></svg:path>`,
})
export class LucideBuilding2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
