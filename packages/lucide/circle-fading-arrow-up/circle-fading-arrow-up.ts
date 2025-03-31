import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleFadingArrowUp],svg[lucide-circle-fading-arrow-up]',
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
  template: `<svg:path d="M12 2a10 10 0 0 1 7.38 16.75"></svg:path>
    <svg:path d="m16 12-4-4-4 4"></svg:path>
    <svg:path d="M12 16V8"></svg:path>
    <svg:path d="M2.5 8.875a10 10 0 0 0-.5 3"></svg:path>
    <svg:path d="M2.83 16a10 10 0 0 0 2.43 3.4"></svg:path>
    <svg:path d="M4.636 5.235a10 10 0 0 1 .891-.857"></svg:path>
    <svg:path d="M8.644 21.42a10 10 0 0 0 7.631-.38"></svg:path>`,
})
export class LucideCircleFadingArrowUp {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
