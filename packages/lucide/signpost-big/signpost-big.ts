import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSignpostBig],svg[lucide-signpost-big]',
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
  template: `<svg:path d="M10 9H4L2 7l2-2h6"></svg:path>
    <svg:path d="M14 5h6l2 2-2 2h-6"></svg:path>
    <svg:path d="M10 22V4a2 2 0 1 1 4 0v18"></svg:path>
    <svg:path d="M8 22h8"></svg:path>`,
})
export class LucideSignpostBig {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
