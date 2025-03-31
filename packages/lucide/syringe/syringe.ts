import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSyringe],svg[lucide-syringe]',
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
  template: `<svg:path d="m18 2 4 4"></svg:path>
    <svg:path d="m17 7 3-3"></svg:path>
    <svg:path
      d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
    ></svg:path>
    <svg:path d="m9 11 4 4"></svg:path>
    <svg:path d="m5 19-3 3"></svg:path>
    <svg:path d="m14 4 6 6"></svg:path>`,
})
export class LucideSyringe {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
