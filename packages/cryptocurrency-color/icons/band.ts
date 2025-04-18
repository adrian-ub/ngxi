import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBandIcon],svg[cryptocurrency-color-band-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#516AFF"></svg:circle><svg:g fill="#FFF"><svg:path d="m18.286 12.479l2.2 1.257V7.45l-4.4-2.2L9.25 9.1v13.671l6.836 3.929l6.757-4.007v-6.757l-6.522-3.929l-2.2 1.1l6.522 3.85l.078 4.636l-4.635 2.593l-4.715-2.672V10.2l4.715-2.593l2.2 1.179z"></svg:path><svg:path d="m15.85 16.25l1.493-.786l1.65 1.022l-4.872 2.75v-5.657L15.85 14.6"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorBandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
