import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCigaretteOff],svg[lucide-cigarette-off]',
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
  template: `<svg:path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"></svg:path>
    <svg:path d="M18 8c0-2.5-2-2.5-2-5"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"></svg:path>
    <svg:path d="M22 8c0-2.5-2-2.5-2-5"></svg:path>
    <svg:path d="M7 12v4"></svg:path>`,
})
export class LucideCigaretteOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
