import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNexoIcon],svg[cryptocurrency-color-nexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#1A4199"></svg:circle><svg:g fill="#FFF"><svg:path d="m10.676 7.125l10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 0 1 .42 0" opacity=".7"></svg:path><svg:path d="m21.408 7l-5.467 3.16l5.467 3.156z" opacity=".9"></svg:path><svg:path d="m21.408 7l5.264 3.036a.42.42 0 0 1 .22.367v12.389l-5.484-3.157z"></svg:path><svg:path d="m26.881 22.792l-5.264 3.033a.44.44 0 0 1-.42 0l-10.732-6.19v-6.328z" opacity=".9"></svg:path><svg:path d="M5 10.16v12.387a.42.42 0 0 0 .22.368l5.265 3.036V13.307z" opacity=".6"></svg:path><svg:path d="m10.476 25.95l5.465-3.158l-5.465-3.157z" opacity=".7"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorNexoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
