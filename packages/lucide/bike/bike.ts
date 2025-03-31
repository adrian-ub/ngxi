import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBike],svg[lucide-bike]',
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
  template: `<svg:circle cx="18.5" cy="17.5" r="3.5"></svg:circle>
    <svg:circle cx="5.5" cy="17.5" r="3.5"></svg:circle>
    <svg:circle cx="15" cy="5" r="1"></svg:circle>
    <svg:path d="M12 17.5V14l-3-3 4-3 2 3h2"></svg:path>`,
})
export class LucideBike {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
