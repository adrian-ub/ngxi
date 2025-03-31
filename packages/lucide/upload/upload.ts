import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUpload],svg[lucide-upload]',
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
  template: `<svg:path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></svg:path>
    <svg:polyline points="17 8 12 3 7 8"></svg:polyline>
    <svg:line x1="12" x2="12" y1="3" y2="15"></svg:line>`,
})
export class LucideUpload {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
