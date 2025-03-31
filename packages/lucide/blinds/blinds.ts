import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBlinds],svg[lucide-blinds]',
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
  template: `<svg:path d="M3 3h18"></svg:path>
    <svg:path d="M20 7H8"></svg:path>
    <svg:path d="M20 11H8"></svg:path>
    <svg:path d="M10 19h10"></svg:path>
    <svg:path d="M8 15h12"></svg:path>
    <svg:path d="M4 3v14"></svg:path>
    <svg:circle cx="4" cy="19" r="2"></svg:circle>`,
})
export class LucideBlinds {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
