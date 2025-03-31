import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVault],svg[lucide-vault]',
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
  template: `<svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect>
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></svg:circle>
    <svg:path d="m7.9 7.9 2.7 2.7"></svg:path>
    <svg:circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></svg:circle>
    <svg:path d="m13.4 10.6 2.7-2.7"></svg:path>
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></svg:circle>
    <svg:path d="m7.9 16.1 2.7-2.7"></svg:path>
    <svg:circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></svg:circle>
    <svg:path d="m13.4 13.4 2.7 2.7"></svg:path>
    <svg:circle cx="12" cy="12" r="2"></svg:circle>`,
})
export class LucideVault {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
