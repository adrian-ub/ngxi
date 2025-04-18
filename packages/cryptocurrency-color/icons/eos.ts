import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEosIcon],svg[cryptocurrency-color-eos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"></svg:circle><svg:path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".64" d="M10.886 11.61L16 27.667l-7.588-4.754zL16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986l2.475 11.303l-7.588 4.754L21.12 11.61"></svg:path></svg:g>`,
})
export class CryptocurrencyColorEosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
