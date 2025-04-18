import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyRIcon],svg[cryptocurrency-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-5.5-7.362l3.467-1.812V10.745l4.952 2.778l-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503l4.21-2.175v-3.866L13.966 7L10.5 8.812z"></svg:path>`,
})
export class CryptocurrencyRIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
