import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBus],svg[lucide-bus]',
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
  template: `<svg:path d="M8 6v6"></svg:path>
    <svg:path d="M15 6v6"></svg:path>
    <svg:path d="M2 12h19.6"></svg:path>
    <svg:path
      d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
    ></svg:path>
    <svg:circle cx="7" cy="18" r="2"></svg:circle>
    <svg:path d="M9 18h5"></svg:path>
    <svg:circle cx="16" cy="18" r="2"></svg:circle>`,
})
export class LucideBus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
