import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipHorizontal2],svg[lucide-flip-horizontal-2]',
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
  template: `<svg:path d="m3 7 5 5-5 5V7"></svg:path>
    <svg:path d="m21 7-5 5 5 5V7"></svg:path>
    <svg:path d="M12 20v2"></svg:path>
    <svg:path d="M12 14v2"></svg:path>
    <svg:path d="M12 8v2"></svg:path>
    <svg:path d="M12 2v2"></svg:path>`,
})
export class LucideFlipHorizontal2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
