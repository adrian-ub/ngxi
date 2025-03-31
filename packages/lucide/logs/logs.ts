import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLogs],svg[lucide-logs]',
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
  template: `<svg:path d="M13 12h8"></svg:path>
    <svg:path d="M13 18h8"></svg:path>
    <svg:path d="M13 6h8"></svg:path>
    <svg:path d="M3 12h1"></svg:path>
    <svg:path d="M3 18h1"></svg:path>
    <svg:path d="M3 6h1"></svg:path>
    <svg:path d="M8 12h1"></svg:path>
    <svg:path d="M8 18h1"></svg:path>
    <svg:path d="M8 6h1"></svg:path>`,
})
export class LucideLogs {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
