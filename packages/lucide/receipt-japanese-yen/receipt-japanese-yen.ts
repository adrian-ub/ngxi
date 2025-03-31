import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptJapaneseYen],svg[lucide-receipt-japanese-yen]',
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
      d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    ></svg:path>
    <svg:path d="m12 10 3-3"></svg:path>
    <svg:path d="m9 7 3 3v7.5"></svg:path>
    <svg:path d="M9 11h6"></svg:path>
    <svg:path d="M9 15h6"></svg:path>`,
})
export class LucideReceiptJapaneseYen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
