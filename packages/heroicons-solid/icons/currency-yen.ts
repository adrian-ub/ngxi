import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCurrencyYenIcon],svg[heroicons-solid-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M7.858 5.485a1 1 0 0 0-1.715 1.03L7.633 9H7a1 1 0 1 0 0 2h1.834l.166.277V12H7a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h2a1 1 0 1 0 0-2h-2v-.723l.166-.277H13a1 1 0 1 0 0-2h-.634l1.492-2.486a1 1 0 1 0-1.716-1.029L10.035 9h-.068z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidCurrencyYenIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
