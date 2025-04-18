import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEthIcon],svg[cryptocurrency-color-eth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#627EEA"></svg:circle><svg:g fill="#FFF" fill-rule="nonzero"><svg:path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"></svg:path><svg:path d="M16.498 4L9 16.22l7.498-3.35z"></svg:path><svg:path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"></svg:path><svg:path d="M16.498 27.995v-6.028L9 17.616z"></svg:path><svg:path fill-opacity=".2" d="m16.498 20.573l7.497-4.353l-7.497-3.348z"></svg:path><svg:path fill-opacity=".602" d="m9 16.22l7.498 4.353v-7.701z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorEthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
