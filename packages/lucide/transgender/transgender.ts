import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTransgender],svg[lucide-transgender]',
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
  template: `<svg:path d="M12 16v6"></svg:path>
    <svg:path d="M14 20h-4"></svg:path>
    <svg:path d="M18 2h4v4"></svg:path>
    <svg:path d="m2 2 7.17 7.17"></svg:path>
    <svg:path d="M2 5.355V2h3.357"></svg:path>
    <svg:path d="m22 2-7.17 7.17"></svg:path>
    <svg:path d="M8 5 5 8"></svg:path>
    <svg:circle cx="12" cy="12" r="4"></svg:circle>`,
})
export class LucideTransgender {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
