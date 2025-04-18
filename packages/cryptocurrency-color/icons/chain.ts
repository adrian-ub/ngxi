import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorChainIcon],svg[cryptocurrency-color-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#00ACED" fill-rule="nonzero"></svg:circle><svg:g fill="#FFF"><svg:path d="M6 9.714v4.076l9.895 5.715l6.42-3.715v3.315l3.456 2.038V9.714l-9.885 5.715z"></svg:path><svg:path d="M15.886 4L6 9.714v11.429l9.886 5.714l9.857-5.714l-3.495-2.038l-6.362 3.676l-6.39-3.676v-7.353l6.39-3.676l6.362 3.676l3.495-2.038z" opacity=".7"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorChainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
