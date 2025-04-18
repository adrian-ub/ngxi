import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCoinsFilledIcon],svg[bitcoin-icons-coins-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16a6 6 0 0 0 5.97-6.597a5.001 5.001 0 1 1-6.567 6.568Q9.7 16 10 16"></svg:path><svg:circle cx="10" cy="10" r="5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsCoinsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
