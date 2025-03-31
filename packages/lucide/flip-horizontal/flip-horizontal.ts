import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipHorizontal],svg[lucide-flip-horizontal]',
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
  template: `<svg:path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"></svg:path>
    <svg:path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"></svg:path>
    <svg:path d="M12 20v2"></svg:path>
    <svg:path d="M12 14v2"></svg:path>
    <svg:path d="M12 8v2"></svg:path>
    <svg:path d="M12 2v2"></svg:path>`,
})
export class LucideFlipHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
