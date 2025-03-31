import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAntenna],svg[lucide-antenna]',
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
    <svg:path d="M2 12 7 2" />
    <svg:path d="m7 12 5-10" />
    <svg:path d="m12 12 5-10" />
    <svg:path d="m17 12 5-10" />
    <svg:path d="M4.5 7h15" />
    <svg:path d="M12 16v6" />
  `,
})
export class LucideAntenna {
  readonly class = input('lucide lucide-antenna');
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
