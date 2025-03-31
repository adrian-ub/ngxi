import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHaze],svg[lucide-haze]',
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
  template: `<svg:path d="m5.2 6.2 1.4 1.4"></svg:path>
    <svg:path d="M2 13h2"></svg:path>
    <svg:path d="M20 13h2"></svg:path>
    <svg:path d="m17.4 7.6 1.4-1.4"></svg:path>
    <svg:path d="M22 17H2"></svg:path>
    <svg:path d="M22 21H2"></svg:path>
    <svg:path d="M16 13a4 4 0 0 0-8 0"></svg:path>
    <svg:path d="M12 5V2.5"></svg:path>`,
})
export class LucideHaze {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
