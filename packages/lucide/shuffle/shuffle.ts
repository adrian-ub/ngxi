import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShuffle],svg[lucide-shuffle]',
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
  template: `<svg:path d="m18 14 4 4-4 4"></svg:path>
    <svg:path d="m18 2 4 4-4 4"></svg:path>
    <svg:path
      d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
    ></svg:path>
    <svg:path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></svg:path>
    <svg:path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></svg:path>`,
})
export class LucideShuffle {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
