import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroBeakerOutline],svg[hero-beaker-outline]',
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
    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
  ></svg:path>`,
})
export class HeroBeakerOutline {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('none');
  readonly viewBox = input('0 0 24 24');
  readonly strokeWidth = input('1.5', { alias: 'stroke-width' });
  readonly stroke = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
