import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCookie],svg[lucide-cookie]',
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
  template: `<svg:path
      d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
    ></svg:path>
    <svg:path d="M8.5 8.5v.01"></svg:path>
    <svg:path d="M16 15.5v.01"></svg:path>
    <svg:path d="M12 12v.01"></svg:path>
    <svg:path d="M11 17v.01"></svg:path>
    <svg:path d="M7 14v.01"></svg:path>`,
})
export class LucideCookie {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
