import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicroscope],svg[lucide-microscope]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path d="M6 18h8" />
    <svg:path d="M3 22h18" />
    <svg:path d="M14 22a7 7 0 1 0 0-14h-1" />
    <svg:path d="M9 14h2" />
    <svg:path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <svg:path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  `,
})
export class LucideMicroscope {
  readonly class = input('lucide lucide-microscope');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
