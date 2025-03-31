import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideJapaneseYen],svg[lucide-japanese-yen]',
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
  template: `<svg:path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></svg:path>
    <svg:path d="M6 15h12"></svg:path>
    <svg:path d="M6 11h12"></svg:path>`,
})
export class LucideJapaneseYen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
