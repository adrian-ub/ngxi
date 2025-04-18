import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCopyFilledIcon],svg[bitcoin-icons-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="14" x="6" y="6" fill="currentColor" rx="1.5"></svg:rect><svg:path fill="currentColor" d="M8.064 5.064A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-.064.436A1.5 1.5 0 0 0 18 16.5v-11A1.5 1.5 0 0 0 16.5 4h-7a1.5 1.5 0 0 0-1.436 1.064"></svg:path>`,
})
export class BitcoinIconsCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
