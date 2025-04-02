import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBanknoteArrowUp],svg[lucide-banknote-arrow-up]',
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
  template: `<svg:path
      d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
    ></svg:path>
    <svg:path d="M18 12h.01"></svg:path>
    <svg:path d="M19 22v-6"></svg:path>
    <svg:path d="m22 19-3-3-3 3"></svg:path>
    <svg:path d="M6 12h.01"></svg:path>
    <svg:circle cx="12" cy="12" r="2"></svg:circle>`,
})
export class LucideBanknoteArrowUp {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
