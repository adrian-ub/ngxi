import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLanguages],svg[lucide-languages]',
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
  template: `<svg:path d="m5 8 6 6"></svg:path>
    <svg:path d="m4 14 6-6 2-3"></svg:path>
    <svg:path d="M2 5h12"></svg:path>
    <svg:path d="M7 2h1"></svg:path>
    <svg:path d="m22 22-5-10-5 10"></svg:path>
    <svg:path d="M14 18h6"></svg:path>`,
})
export class LucideLanguages {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
