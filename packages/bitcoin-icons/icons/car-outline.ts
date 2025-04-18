import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCarOutlineIcon],svg[bitcoin-icons-car-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M18.5 5.51c-.2-.59-.59-1.01-1.25-1.01H6.75c-.66 0-1.04.42-1.25 1.01l-2 5.74v7.5c0 .55.2.75.75.75h.5c.55 0 .75-.2.75-.75V17.5h13v1.25c0 .55.2.75.75.75h.5c.55 0 .75-.2.75-.75v-7.5z"></svg:path><svg:path d="M6.5 14.5a1 1 0 1 1 0-2a1 1 0 1 1 0 2Zm11 0a1 1 0 1 1 0-2a1 1 0 1 1 0 2Z"></svg:path><svg:path stroke-linejoin="round" d="M5.75 9.5L7 6h10l1.25 3.5z"></svg:path></svg:g>`,
})
export class BitcoinIconsCarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
