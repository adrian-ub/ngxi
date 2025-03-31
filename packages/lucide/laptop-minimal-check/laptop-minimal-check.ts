import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimalCheck],svg[lucide-laptop-minimal-check]',
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
  template: `<svg:path d="M2 20h20"></svg:path>
    <svg:path d="m9 10 2 2 4-4"></svg:path>
    <svg:rect x="3" y="4" width="18" height="12" rx="2"></svg:rect>`,
})
export class LucideLaptopMinimalCheck {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
