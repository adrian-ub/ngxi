import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLoader],svg[lucide-loader]',
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
  template: `<svg:path d="M12 2v4"></svg:path>
    <svg:path d="m16.2 7.8 2.9-2.9"></svg:path>
    <svg:path d="M18 12h4"></svg:path>
    <svg:path d="m16.2 16.2 2.9 2.9"></svg:path>
    <svg:path d="M12 18v4"></svg:path>
    <svg:path d="m4.9 19.1 2.9-2.9"></svg:path>
    <svg:path d="M2 12h4"></svg:path>
    <svg:path d="m4.9 4.9 2.9 2.9"></svg:path>`,
})
export class LucideLoader {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
