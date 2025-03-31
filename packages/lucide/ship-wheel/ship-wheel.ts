import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShipWheel],svg[lucide-ship-wheel]',
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
    <svg:circle cx="12" cy="12" r="8" />
    <svg:path d="M12 2v7.5" />
    <svg:path d="m19 5-5.23 5.23" />
    <svg:path d="M22 12h-7.5" />
    <svg:path d="m19 19-5.23-5.23" />
    <svg:path d="M12 14.5V22" />
    <svg:path d="M10.23 13.77 5 19" />
    <svg:path d="M9.5 12H2" />
    <svg:path d="M10.23 10.23 5 5" />
    <svg:circle cx="12" cy="12" r="2.5" />
  `,
})
export class LucideShipWheel {
  readonly class = input('lucide lucide-ship-wheel');
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
