import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServerCog],svg[lucide-server-cog]',
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
  template: `<svg:circle cx="12" cy="12" r="3"></svg:circle>
    <svg:path
      d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
    ></svg:path>
    <svg:path
      d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
    ></svg:path>
    <svg:path d="M6 6h.01"></svg:path>
    <svg:path d="M6 18h.01"></svg:path>
    <svg:path d="m15.7 13.4-.9-.3"></svg:path>
    <svg:path d="m9.2 10.9-.9-.3"></svg:path>
    <svg:path d="m10.6 15.7.3-.9"></svg:path>
    <svg:path d="m13.6 15.7-.4-1"></svg:path>
    <svg:path d="m10.8 9.3-.4-1"></svg:path>
    <svg:path d="m8.3 13.6 1-.4"></svg:path>
    <svg:path d="m14.7 10.8 1-.4"></svg:path>
    <svg:path d="m13.4 8.3-.3.9"></svg:path>`,
})
export class LucideServerCog {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
