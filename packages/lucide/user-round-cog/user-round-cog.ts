import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundCog],svg[lucide-user-round-cog]',
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
  template: `<svg:path d="M2 21a8 8 0 0 1 10.434-7.62"></svg:path>
    <svg:circle cx="10" cy="8" r="5"></svg:circle>
    <svg:circle cx="18" cy="18" r="3"></svg:circle>
    <svg:path d="m19.5 14.3-.4.9"></svg:path>
    <svg:path d="m16.9 20.8-.4.9"></svg:path>
    <svg:path d="m21.7 19.5-.9-.4"></svg:path>
    <svg:path d="m15.2 16.9-.9-.4"></svg:path>
    <svg:path d="m21.7 16.5-.9.4"></svg:path>
    <svg:path d="m15.2 19.1-.9.4"></svg:path>
    <svg:path d="m19.5 21.7-.4-.9"></svg:path>
    <svg:path d="m16.9 15.2-.4-.9"></svg:path>`,
})
export class LucideUserRoundCog {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
