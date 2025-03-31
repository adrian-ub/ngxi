import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRollerCoaster],svg[lucide-roller-coaster]',
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
    <svg:path d="M6 19V5" />
    <svg:path d="M10 19V6.8" />
    <svg:path d="M14 19v-7.8" />
    <svg:path d="M18 5v4" />
    <svg:path d="M18 19v-6" />
    <svg:path d="M22 19V9" />
    <svg:path
      d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
    />
  `,
})
export class LucideRollerCoaster {
  readonly class = input('lucide lucide-roller-coaster');
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
