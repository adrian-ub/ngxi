import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyBlockIcon],svg[cryptocurrency-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M11.022 7l5.069 9l-5.16 9H21.25l5.25-9l-5.25-9zm5.43 3.166h2.988L22.789 16l-3.35 5.834h-2.986L19.802 16zm-4.34.86L10.29 7.79L5.5 16l4.748 8.14l1.84-3.21L9.21 16z"></svg:path>`,
})
export class CryptocurrencyBlockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
