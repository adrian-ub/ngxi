import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSun],svg[lucide-sun]',
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
  template: `<svg:circle cx="12" cy="12" r="4"></svg:circle>
    <svg:path d="M12 2v2"></svg:path>
    <svg:path d="M12 20v2"></svg:path>
    <svg:path d="m4.93 4.93 1.41 1.41"></svg:path>
    <svg:path d="m17.66 17.66 1.41 1.41"></svg:path>
    <svg:path d="M2 12h2"></svg:path>
    <svg:path d="M20 12h2"></svg:path>
    <svg:path d="m6.34 17.66-1.41 1.41"></svg:path>
    <svg:path d="m19.07 4.93-1.41 1.41"></svg:path>`,
})
export class LucideSun {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
