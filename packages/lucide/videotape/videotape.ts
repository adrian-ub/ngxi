import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVideotape],svg[lucide-videotape]',
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
  template: `<svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect>
    <svg:path d="M2 8h20"></svg:path>
    <svg:circle cx="8" cy="14" r="2"></svg:circle>
    <svg:path d="M8 12h8"></svg:path>
    <svg:circle cx="16" cy="14" r="2"></svg:circle>`,
})
export class LucideVideotape {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
