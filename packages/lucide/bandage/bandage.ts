import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBandage],svg[lucide-bandage]',
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
    <svg:path d="M10 10.01h.01" />
    <svg:path d="M10 14.01h.01" />
    <svg:path d="M14 10.01h.01" />
    <svg:path d="M14 14.01h.01" />
    <svg:path d="M18 6v11.5" />
    <svg:path d="M6 6v12" />
    <svg:rect x="2" y="6" width="20" height="12" rx="2" />
  `,
})
export class LucideBandage {
  readonly class = input('lucide lucide-bandage');
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
