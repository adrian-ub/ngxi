import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroCodeBracketMini],svg[hero-code-bracket-mini]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
    fill-rule="evenodd"
    d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroCodeBracketMini {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 20 20');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
