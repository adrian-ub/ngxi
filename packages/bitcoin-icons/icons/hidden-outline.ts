import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsHiddenOutlineIcon],svg[bitcoin-icons-hidden-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M10.563 16.436q.701.064 1.437.064c4.694 0 8.5-2.015 8.5-4.5c0-1.213-.906-2.313-2.379-3.122m-4.685-1.314A16 16 0 0 0 12 7.5c-4.694 0-8.5 2.015-8.5 4.5c0 1.212.905 2.312 2.376 3.121"></svg:path><svg:path stroke-linejoin="round" d="M19 5L5 19"></svg:path></svg:g>`,
})
export class BitcoinIconsHiddenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
