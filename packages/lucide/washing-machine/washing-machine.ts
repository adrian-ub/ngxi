import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWashingMachine],svg[lucide-washing-machine]',
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
  template: `<svg:path d="M3 6h3"></svg:path>
    <svg:path d="M17 6h.01"></svg:path>
    <svg:rect width="18" height="20" x="3" y="2" rx="2"></svg:rect>
    <svg:circle cx="12" cy="13" r="5"></svg:circle>
    <svg:path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class LucideWashingMachine {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
