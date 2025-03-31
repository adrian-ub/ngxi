import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSiren],svg[lucide-siren]',
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
  template: `<svg:path d="M7 18v-6a5 5 0 1 1 10 0v6"></svg:path>
    <svg:path
      d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
    ></svg:path>
    <svg:path d="M21 12h1"></svg:path>
    <svg:path d="M18.5 4.5 18 5"></svg:path>
    <svg:path d="M2 12h1"></svg:path>
    <svg:path d="M12 2v1"></svg:path>
    <svg:path d="m4.929 4.929.707.707"></svg:path>
    <svg:path d="M12 12v6"></svg:path>`,
})
export class LucideSiren {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
