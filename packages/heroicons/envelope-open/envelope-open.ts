import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroEnvelopeOpen],svg[hero-envelope-open]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke]': 'stroke()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
  ></svg:path>`,
})
export class HeroEnvelopeOpen {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('none');
  readonly viewBox = input('0 0 24 24');
  readonly strokeWidth = input('1.5', { alias: 'stroke-width' });
  readonly stroke = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
