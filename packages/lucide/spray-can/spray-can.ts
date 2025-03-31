import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSprayCan],svg[lucide-spray-can]',
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
  template: `<svg:path d="M3 3h.01"></svg:path>
    <svg:path d="M7 5h.01"></svg:path>
    <svg:path d="M11 7h.01"></svg:path>
    <svg:path d="M3 7h.01"></svg:path>
    <svg:path d="M7 9h.01"></svg:path>
    <svg:path d="M3 11h.01"></svg:path>
    <svg:rect width="4" height="4" x="15" y="5"></svg:rect>
    <svg:path
      d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
    ></svg:path>
    <svg:path d="m13 14 8-2"></svg:path>
    <svg:path d="m13 19 8-2"></svg:path>`,
})
export class LucideSprayCan {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
