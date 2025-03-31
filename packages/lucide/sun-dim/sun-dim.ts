import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunDim],svg[lucide-sun-dim]',
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
  template: `<svg:circle cx="12" cy="12" r="4"></svg:circle>
    <svg:path d="M12 4h.01"></svg:path>
    <svg:path d="M20 12h.01"></svg:path>
    <svg:path d="M12 20h.01"></svg:path>
    <svg:path d="M4 12h.01"></svg:path>
    <svg:path d="M17.657 6.343h.01"></svg:path>
    <svg:path d="M17.657 17.657h.01"></svg:path>
    <svg:path d="M6.343 17.657h.01"></svg:path>
    <svg:path d="M6.343 6.343h.01"></svg:path>`,
})
export class LucideSunDim {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
