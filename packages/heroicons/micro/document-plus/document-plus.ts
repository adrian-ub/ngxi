import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroDocumentPlusMicro],svg[hero-document-plus-micro]',
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
    d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4.75 4.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroDocumentPlusMicro {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 16 16');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
