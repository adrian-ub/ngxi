import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCpu],svg[lucide-cpu]',
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
  template: `<svg:rect width="16" height="16" x="4" y="4" rx="2"></svg:rect>
    <svg:rect width="6" height="6" x="9" y="9" rx="1"></svg:rect>
    <svg:path d="M15 2v2"></svg:path>
    <svg:path d="M15 20v2"></svg:path>
    <svg:path d="M2 15h2"></svg:path>
    <svg:path d="M2 9h2"></svg:path>
    <svg:path d="M20 15h2"></svg:path>
    <svg:path d="M20 9h2"></svg:path>
    <svg:path d="M9 2v2"></svg:path>
    <svg:path d="M9 20v2"></svg:path>`,
})
export class LucideCpu {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
