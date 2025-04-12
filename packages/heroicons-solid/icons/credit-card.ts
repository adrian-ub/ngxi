import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCreditCardIcon],svg[heroicons-solid-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 4a2 2 0 0 0-2 2v1h16V6a2 2 0 0 0-2-2z"></svg:path><svg:path fill-rule="evenodd" d="M18 9H2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`
})
export class HeroiconsSolidCreditCardIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
