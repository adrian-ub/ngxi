import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyEthIcon],svg[cryptocurrency-eth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m7.994-15.781L16.498 4L9 16.22l7.498 4.353zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378z"></svg:path><svg:g fill-rule="nonzero"><svg:path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></svg:path><svg:path fill-opacity=".801" d="m16.498 20.573l7.497-4.353l-7.497-3.348z"></svg:path><svg:path fill-opacity=".298" d="m9 16.22l7.498 4.353v-7.701z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyEthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
