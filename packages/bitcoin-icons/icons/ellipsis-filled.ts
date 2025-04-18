import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsEllipsisFilledIcon],svg[bitcoin-icons-ellipsis-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6.5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsEllipsisFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
