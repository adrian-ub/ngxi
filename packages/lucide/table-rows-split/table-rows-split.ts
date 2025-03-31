import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableRowsSplit],svg[lucide-table-rows-split]',
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
  template: `<svg:path d="M14 10h2"></svg:path>
    <svg:path d="M15 22v-8"></svg:path>
    <svg:path d="M15 2v4"></svg:path>
    <svg:path d="M2 10h2"></svg:path>
    <svg:path d="M20 10h2"></svg:path>
    <svg:path d="M3 19h18"></svg:path>
    <svg:path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"></svg:path>
    <svg:path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"></svg:path>
    <svg:path d="M8 10h2"></svg:path>
    <svg:path d="M9 22v-8"></svg:path>
    <svg:path d="M9 2v4"></svg:path>`,
})
export class LucideTableRowsSplit {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
