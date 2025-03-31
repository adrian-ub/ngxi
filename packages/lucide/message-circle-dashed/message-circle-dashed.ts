import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleDashed],svg[lucide-message-circle-dashed]',
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
  template: `<svg:path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"></svg:path>
    <svg:path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"></svg:path>
    <svg:path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"></svg:path>
    <svg:path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"></svg:path>
    <svg:path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"></svg:path>
    <svg:path d="M3.5 17.5 2 22l4.5-1.5"></svg:path>
    <svg:path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"></svg:path>
    <svg:path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"></svg:path>`,
})
export class LucideMessageCircleDashed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
