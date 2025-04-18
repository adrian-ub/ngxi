import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRIcon],svg[cryptocurrency-color-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#771a4e"></svg:circle><svg:path fill="#fff" d="m10.5 24.638l3.467-1.812V10.745l4.952 2.778l-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503l4.209-2.175v-3.866L13.967 7L10.5 8.812z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorRIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
