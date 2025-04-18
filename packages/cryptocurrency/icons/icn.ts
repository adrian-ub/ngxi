import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyIcnIcon],svg[cryptocurrency-icn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m4.833-25v18H23.5V7zm-4.444 9v9h2.667v-9zm-4.445-4.5V25h2.667V11.5zm-4.444 9V25h2.667v-4.5z"></svg:path>`,
})
export class CryptocurrencyIcnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
