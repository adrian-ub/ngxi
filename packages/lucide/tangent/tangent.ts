import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTangent],svg[lucide-tangent]',
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
  template: `<svg:circle cx="17" cy="4" r="2"></svg:circle>
    <svg:path d="M15.59 5.41 5.41 15.59"></svg:path>
    <svg:circle cx="4" cy="17" r="2"></svg:circle>
    <svg:path d="M12 22s-4-9-1.5-11.5S22 12 22 12"></svg:path>`,
})
export class LucideTangent {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
