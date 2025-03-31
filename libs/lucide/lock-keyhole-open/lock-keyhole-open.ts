import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockKeyholeOpen],svg[lucide-lock-keyhole-open]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:circle cx="12" cy="16" r="1" />
    <svg:rect width="18" height="12" x="3" y="10" rx="2" />
    <svg:path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
  `,
})
export class LucideLockKeyholeOpen {
  readonly class = input('lucide lucide-lock-keyhole-open');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
