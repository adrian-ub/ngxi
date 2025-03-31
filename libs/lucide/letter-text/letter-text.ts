import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLetterText],svg[lucide-letter-text]',
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
    <svg:path d="M15 12h6" />
    <svg:path d="M15 6h6" />
    <svg:path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
    <svg:path d="M3 18h18" />
    <svg:path d="M4 11h6" />
  `,
})
export class LucideLetterText {
  readonly class = input('lucide lucide-letter-text');
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
