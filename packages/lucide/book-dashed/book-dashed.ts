import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookDashed],svg[lucide-book-dashed]',
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
  template: `<svg:path d="M12 17h1.5"></svg:path>
    <svg:path d="M12 22h1.5"></svg:path>
    <svg:path d="M12 2h1.5"></svg:path>
    <svg:path d="M17.5 22H19a1 1 0 0 0 1-1"></svg:path>
    <svg:path d="M17.5 2H19a1 1 0 0 1 1 1v1.5"></svg:path>
    <svg:path d="M20 14v3h-2.5"></svg:path>
    <svg:path d="M20 8.5V10"></svg:path>
    <svg:path d="M4 10V8.5"></svg:path>
    <svg:path d="M4 19.5V14"></svg:path>
    <svg:path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8"></svg:path>
    <svg:path d="M8 22H6.5a1 1 0 0 1 0-5H8"></svg:path>`,
})
export class LucideBookDashed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
