import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBugOff],svg[lucide-bug-off]',
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
  template: `<svg:path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"></svg:path>
    <svg:path d="M14.12 3.88 16 2"></svg:path>
    <svg:path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"></svg:path>
    <svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"></svg:path>
    <svg:path d="M12 20v-8"></svg:path>
    <svg:path d="M6 13H2"></svg:path>
    <svg:path d="M3 21c0-2.1 1.7-3.9 3.8-4"></svg:path>`,
})
export class LucideBugOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
