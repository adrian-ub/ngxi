import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorThetaIcon],svg[cryptocurrency-color-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#2ab8e6"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M10.96 6h10.08l.96.993v18.014l-.96.993H10.96l-.96-.993V6.993zm.96 18.013h8.16V7.987h-8.16zm7.134-5.17h-2.087v2.263h-1.884v-2.262h-2.087v-1.949h6.058zm0-5.582v1.948h-6.058v-1.948h2.087v-2.263h1.884v2.263z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorThetaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
