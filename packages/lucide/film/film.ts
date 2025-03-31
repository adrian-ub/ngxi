import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFilm],svg[lucide-film]',
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
    <svg:path d="M7 3v18"></svg:path>
    <svg:path d="M3 7.5h4"></svg:path>
    <svg:path d="M3 12h18"></svg:path>
    <svg:path d="M3 16.5h4"></svg:path>
    <svg:path d="M17 3v18"></svg:path>
    <svg:path d="M17 7.5h4"></svg:path>
    <svg:path d="M17 16.5h4"></svg:path>`,
})
export class LucideFilm {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
