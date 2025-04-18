import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyThetaIcon],svg[cryptocurrency-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M10.96 6l-.96.993v18.014l.96.993h10.08l.96-.993V6.993L21.04 6zm.96 18.013V7.987h8.16v16.026zm7.134-5.17v-1.948h-6.058v1.949h2.087v2.262h1.884v-2.262zm0-5.582h-2.087v-2.263h-1.884v2.263h-2.087v1.948h6.058z"></svg:path>`,
})
export class CryptocurrencyThetaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
