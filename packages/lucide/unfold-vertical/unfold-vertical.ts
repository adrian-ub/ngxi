import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUnfoldVertical],svg[lucide-unfold-vertical]',
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
    <svg:path d="M12 22v-6" />
    <svg:path d="M12 8V2" />
    <svg:path d="M4 12H2" />
    <svg:path d="M10 12H8" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
    <svg:path d="m15 19-3 3-3-3" />
    <svg:path d="m15 5-3-3-3 3" />
  `,
})
export class LucideUnfoldVertical {
  readonly class = input('lucide lucide-unfold-vertical');
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
