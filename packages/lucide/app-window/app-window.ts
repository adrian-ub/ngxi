import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAppWindow],svg[lucide-app-window]',
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
  template: `<svg:rect x="2" y="4" width="20" height="16" rx="2"></svg:rect>
    <svg:path d="M10 4v4"></svg:path>
    <svg:path d="M2 8h20"></svg:path>
    <svg:path d="M6 4v4"></svg:path>`,
})
export class LucideAppWindow {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
