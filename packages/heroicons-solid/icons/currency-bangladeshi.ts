import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCurrencyBangladeshiIcon],svg[heroicons-solid-currency-bangladeshi-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M7 4a1 1 0 0 0 0 2a1 1 0 0 1 1 1v1H7a1 1 0 0 0 0 2h1v3a3 3 0 1 0 6 0v-1a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0v-3h3a1 1 0 1 0 0-2h-3V7a3 3 0 0 0-3-3" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCurrencyBangladeshiIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
