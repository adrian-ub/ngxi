import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePilcrow],svg[lucide-square-pilcrow]',
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
  template: `<svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect>
    <svg:path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17"></svg:path>
    <svg:path d="M12 7v10"></svg:path>
    <svg:path d="M16 7v10"></svg:path>`,
})
export class LucideSquarePilcrow {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
