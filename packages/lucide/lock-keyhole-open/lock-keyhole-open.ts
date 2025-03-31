import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockKeyholeOpen],svg[lucide-lock-keyhole-open]',
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
  template: `<svg:circle cx="12" cy="16" r="1"></svg:circle>
    <svg:rect width="18" height="12" x="3" y="10" rx="2"></svg:rect>
    <svg:path d="M7 10V7a5 5 0 0 1 9.33-2.5"></svg:path>`,
})
export class LucideLockKeyholeOpen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
