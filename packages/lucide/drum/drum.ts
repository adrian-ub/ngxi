import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDrum],svg[lucide-drum]',
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
  template: `<svg:path d="m2 2 8 8"></svg:path>
    <svg:path d="m22 2-8 8"></svg:path>
    <svg:ellipse cx="12" cy="9" rx="10" ry="5"></svg:ellipse>
    <svg:path d="M7 13.4v7.9"></svg:path>
    <svg:path d="M12 14v8"></svg:path>
    <svg:path d="M17 13.4v7.9"></svg:path>
    <svg:path d="M2 9v8a10 5 0 0 0 20 0V9"></svg:path>`,
})
export class LucideDrum {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
