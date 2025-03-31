import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVolumeOff],svg[lucide-volume-off]',
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
  template: `<svg:path d="M16 9a5 5 0 0 1 .95 2.293"></svg:path>
    <svg:path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path
      d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
    ></svg:path>
    <svg:path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></svg:path>`,
})
export class LucideVolumeOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
