import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCableCar],svg[lucide-cable-car]',
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
  template: `<svg:path d="M10 3h.01"></svg:path>
    <svg:path d="M14 2h.01"></svg:path>
    <svg:path d="m2 9 20-5"></svg:path>
    <svg:path d="M12 12V6.5"></svg:path>
    <svg:rect width="16" height="10" x="4" y="12" rx="3"></svg:rect>
    <svg:path d="M9 12v5"></svg:path>
    <svg:path d="M15 12v5"></svg:path>
    <svg:path d="M4 17h16"></svg:path>`,
})
export class LucideCableCar {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
