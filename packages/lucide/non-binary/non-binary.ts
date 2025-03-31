import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNonBinary],svg[lucide-non-binary]',
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
  template: `<svg:path d="M12 2v10"></svg:path>
    <svg:path d="m9 4 6 4"></svg:path>
    <svg:path d="m9 8 6-4"></svg:path>
    <svg:circle cx="12" cy="17" r="5"></svg:circle>`,
})
export class LucideNonBinary {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
