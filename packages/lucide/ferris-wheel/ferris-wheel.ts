import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFerrisWheel],svg[lucide-ferris-wheel]',
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
  template: `<svg:circle cx="12" cy="12" r="2"></svg:circle>
    <svg:path d="M12 2v4"></svg:path>
    <svg:path d="m6.8 15-3.5 2"></svg:path>
    <svg:path d="m20.7 7-3.5 2"></svg:path>
    <svg:path d="M6.8 9 3.3 7"></svg:path>
    <svg:path d="m20.7 17-3.5-2"></svg:path>
    <svg:path d="m9 22 3-8 3 8"></svg:path>
    <svg:path d="M8 22h8"></svg:path>
    <svg:path d="M18 18.7a9 9 0 1 0-12 0"></svg:path>`,
})
export class LucideFerrisWheel {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
