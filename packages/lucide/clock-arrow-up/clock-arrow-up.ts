import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockArrowUp],svg[lucide-clock-arrow-up]',
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
  template: `<svg:path d="M13.228 21.925A10 10 0 1 1 21.994 12.338"></svg:path>
    <svg:path d="M12 6v6l1.562.781"></svg:path>
    <svg:path d="m14 18 4-4 4 4"></svg:path>
    <svg:path d="M18 22v-8"></svg:path>`,
})
export class LucideClockArrowUp {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
