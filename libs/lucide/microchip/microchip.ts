import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicrochip],svg[lucide-microchip]',
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
    <svg:path d="M18 12h2" />
    <svg:path d="M18 16h2" />
    <svg:path d="M18 20h2" />
    <svg:path d="M18 4h2" />
    <svg:path d="M18 8h2" />
    <svg:path d="M4 12h2" />
    <svg:path d="M4 16h2" />
    <svg:path d="M4 20h2" />
    <svg:path d="M4 4h2" />
    <svg:path d="M4 8h2" />
    <svg:path
      d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
    />
  `,
})
export class LucideMicrochip {
  readonly class = input('lucide lucide-microchip');
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
