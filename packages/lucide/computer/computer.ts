import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideComputer],svg[lucide-computer]',
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
  template: `<svg:rect width="14" height="8" x="5" y="2" rx="2"></svg:rect>
    <svg:rect width="20" height="8" x="2" y="14" rx="2"></svg:rect>
    <svg:path d="M6 18h2"></svg:path>
    <svg:path d="M12 18h6"></svg:path>`,
})
export class LucideComputer {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
