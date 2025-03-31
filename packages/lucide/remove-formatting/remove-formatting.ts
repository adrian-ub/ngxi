import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRemoveFormatting],svg[lucide-remove-formatting]',
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
  template: `<svg:path d="M4 7V4h16v3"></svg:path>
    <svg:path d="M5 20h6"></svg:path>
    <svg:path d="M13 4 8 20"></svg:path>
    <svg:path d="m15 15 5 5"></svg:path>
    <svg:path d="m20 15-5 5"></svg:path>`,
})
export class LucideRemoveFormatting {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
