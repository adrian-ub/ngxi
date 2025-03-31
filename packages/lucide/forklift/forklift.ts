import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideForklift],svg[lucide-forklift]',
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
  template: `<svg:path d="M12 12H5a2 2 0 0 0-2 2v5"></svg:path>
    <svg:circle cx="13" cy="19" r="2"></svg:circle>
    <svg:circle cx="5" cy="19" r="2"></svg:circle>
    <svg:path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"></svg:path>`,
})
export class LucideForklift {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
