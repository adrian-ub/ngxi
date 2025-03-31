import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareDashedKanban],svg[lucide-square-dashed-kanban]',
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
  template: `<svg:path d="M8 7v7"></svg:path>
    <svg:path d="M12 7v4"></svg:path>
    <svg:path d="M16 7v9"></svg:path>
    <svg:path d="M5 3a2 2 0 0 0-2 2"></svg:path>
    <svg:path d="M9 3h1"></svg:path>
    <svg:path d="M14 3h1"></svg:path>
    <svg:path d="M19 3a2 2 0 0 1 2 2"></svg:path>
    <svg:path d="M21 9v1"></svg:path>
    <svg:path d="M21 14v1"></svg:path>
    <svg:path d="M21 19a2 2 0 0 1-2 2"></svg:path>
    <svg:path d="M14 21h1"></svg:path>
    <svg:path d="M9 21h1"></svg:path>
    <svg:path d="M5 21a2 2 0 0 1-2-2"></svg:path>
    <svg:path d="M3 14v1"></svg:path>
    <svg:path d="M3 9v1"></svg:path>`,
})
export class LucideSquareDashedKanban {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
