import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTramFront],svg[lucide-tram-front]',
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
  template: `<svg:rect width="16" height="16" x="4" y="3" rx="2"></svg:rect>
    <svg:path d="M4 11h16"></svg:path>
    <svg:path d="M12 3v8"></svg:path>
    <svg:path d="m8 19-2 3"></svg:path>
    <svg:path d="m18 22-2-3"></svg:path>
    <svg:path d="M8 15h.01"></svg:path>
    <svg:path d="M16 15h.01"></svg:path>`,
})
export class LucideTramFront {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
