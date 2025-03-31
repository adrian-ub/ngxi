import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileKey2],svg[lucide-file-key-2]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path
      d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"
    ></svg:path>
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path>
    <svg:circle cx="4" cy="16" r="2"></svg:circle>
    <svg:path d="m10 10-4.5 4.5"></svg:path>
    <svg:path d="m9 11 1 1"></svg:path>`,
})
export class LucideFileKey2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
