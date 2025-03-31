import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNfc],svg[lucide-nfc]',
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
  template: `<svg:path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></svg:path>
    <svg:path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"></svg:path>
    <svg:path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"></svg:path>
    <svg:path d="M16.37 2a20.16 20.16 0 0 1 0 20"></svg:path>`,
})
export class LucideNfc {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
