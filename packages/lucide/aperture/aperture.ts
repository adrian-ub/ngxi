import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAperture],svg[lucide-aperture]',
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
  template: `<svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:path d="m14.31 8 5.74 9.94"></svg:path>
    <svg:path d="M9.69 8h11.48"></svg:path>
    <svg:path d="m7.38 12 5.74-9.94"></svg:path>
    <svg:path d="M9.69 16 3.95 6.06"></svg:path>
    <svg:path d="M14.31 16H2.83"></svg:path>
    <svg:path d="m16.62 12-5.74 9.94"></svg:path>`,
})
export class LucideAperture {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
