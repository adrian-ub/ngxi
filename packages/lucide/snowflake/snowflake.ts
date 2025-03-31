import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSnowflake],svg[lucide-snowflake]',
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
  template: `<svg:path d="m10 20-1.25-2.5L6 18"></svg:path>
    <svg:path d="M10 4 8.75 6.5 6 6"></svg:path>
    <svg:path d="m14 20 1.25-2.5L18 18"></svg:path>
    <svg:path d="m14 4 1.25 2.5L18 6"></svg:path>
    <svg:path d="m17 21-3-6h-4"></svg:path>
    <svg:path d="m17 3-3 6 1.5 3"></svg:path>
    <svg:path d="M2 12h6.5L10 9"></svg:path>
    <svg:path d="m20 10-1.5 2 1.5 2"></svg:path>
    <svg:path d="M22 12h-6.5L14 15"></svg:path>
    <svg:path d="m4 10 1.5 2L4 14"></svg:path>
    <svg:path d="m7 21 3-6-1.5-3"></svg:path>
    <svg:path d="m7 3 3 6h4"></svg:path>`,
})
export class LucideSnowflake {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
