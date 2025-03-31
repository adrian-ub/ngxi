import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserSearch],svg[lucide-user-search]',
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
    <svg:circle cx="10" cy="7" r="4" />
    <svg:path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
    <svg:circle cx="17" cy="17" r="3" />
    <svg:path d="m21 21-1.9-1.9" />
  `,
})
export class LucideUserSearch {
  readonly class = input('lucide lucide-user-search');
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
