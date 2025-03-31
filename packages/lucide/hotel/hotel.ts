import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHotel],svg[lucide-hotel]',
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
    <svg:path d="M10 22v-6.57" />
    <svg:path d="M12 11h.01" />
    <svg:path d="M12 7h.01" />
    <svg:path d="M14 15.43V22" />
    <svg:path d="M15 16a5 5 0 0 0-6 0" />
    <svg:path d="M16 11h.01" />
    <svg:path d="M16 7h.01" />
    <svg:path d="M8 11h.01" />
    <svg:path d="M8 7h.01" />
    <svg:rect x="4" y="2" width="16" height="20" rx="2" />
  `,
})
export class LucideHotel {
  readonly class = input('lucide lucide-hotel');
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
