import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContact],svg[lucide-contact]',
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
    <svg:path d="M16 2v2" />
    <svg:path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    <svg:path d="M8 2v2" />
    <svg:circle cx="12" cy="11" r="3" />
    <svg:rect x="3" y="4" width="18" height="18" rx="2" />
  `,
})
export class LucideContact {
  readonly class = input('lucide lucide-contact');
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
