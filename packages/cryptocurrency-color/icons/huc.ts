import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorHucIcon],svg[cryptocurrency-color-huc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ffc018"></svg:circle><svg:path fill="#fff" d="M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorHucIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
