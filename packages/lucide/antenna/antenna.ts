import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAntenna],svg[lucide-antenna]',
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
  template: `<svg:path d="M2 12 7 2"></svg:path>
    <svg:path d="m7 12 5-10"></svg:path>
    <svg:path d="m12 12 5-10"></svg:path>
    <svg:path d="m17 12 5-10"></svg:path>
    <svg:path d="M4.5 7h15"></svg:path>
    <svg:path d="M12 16v6"></svg:path>`,
})
export class LucideAntenna {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
