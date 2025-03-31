import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileBadge],svg[lucide-file-badge]',
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
    <svg:path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <svg:path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
  `,
})
export class LucideFileBadge {
  readonly class = input('lucide lucide-file-badge');
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
