import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRectangleEllipsis],svg[lucide-rectangle-ellipsis]',
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
    <svg:rect width="20" height="12" x="2" y="6" rx="2" />
    <svg:path d="M12 12h.01" />
    <svg:path d="M17 12h.01" />
    <svg:path d="M7 12h.01" />
  `,
})
export class LucideRectangleEllipsis {
  readonly class = input('lucide lucide-rectangle-ellipsis');
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
