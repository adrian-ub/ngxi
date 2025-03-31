import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBarcode],svg[lucide-barcode]',
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
  template: `<svg:path d="M3 5v14"></svg:path>
    <svg:path d="M8 5v14"></svg:path>
    <svg:path d="M12 5v14"></svg:path>
    <svg:path d="M17 5v14"></svg:path>
    <svg:path d="M21 5v14"></svg:path>`,
})
export class LucideBarcode {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
