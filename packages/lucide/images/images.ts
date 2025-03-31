import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImages],svg[lucide-images]',
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
  template: `<svg:path d="M18 22H4a2 2 0 0 1-2-2V6"></svg:path>
    <svg:path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"></svg:path>
    <svg:circle cx="12" cy="8" r="2"></svg:circle>
    <svg:rect width="16" height="16" x="6" y="2" rx="2"></svg:rect>`,
})
export class LucideImages {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
