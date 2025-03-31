import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSchool],svg[lucide-school]',
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
  template: `<svg:path d="M14 22v-4a2 2 0 1 0-4 0v4"></svg:path>
    <svg:path
      d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"
    ></svg:path>
    <svg:path d="M18 5v17"></svg:path>
    <svg:path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"></svg:path>
    <svg:path d="M6 5v17"></svg:path>
    <svg:circle cx="12" cy="9" r="2"></svg:circle>`,
})
export class LucideSchool {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
