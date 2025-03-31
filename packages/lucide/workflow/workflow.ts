import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWorkflow],svg[lucide-workflow]',
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
  template: `<svg:rect width="8" height="8" x="3" y="3" rx="2"></svg:rect>
    <svg:path d="M7 11v4a2 2 0 0 0 2 2h4"></svg:path>
    <svg:rect width="8" height="8" x="13" y="13" rx="2"></svg:rect>`,
})
export class LucideWorkflow {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
