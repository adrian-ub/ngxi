import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUniversity],svg[lucide-university]',
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
  template: `<svg:circle cx="12" cy="10" r="1"></svg:circle>
    <svg:path
      d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
    ></svg:path>
    <svg:path d="M6 17v.01"></svg:path>
    <svg:path d="M6 13v.01"></svg:path>
    <svg:path d="M18 17v.01"></svg:path>
    <svg:path d="M18 13v.01"></svg:path>
    <svg:path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></svg:path>`,
})
export class LucideUniversity {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
