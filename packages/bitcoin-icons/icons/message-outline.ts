import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMessageOutlineIcon],svg[bitcoin-icons-message-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M8.5 18.396V15.5h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H12l-3.073 3.073a.25.25 0 0 1-.427-.177Z"></svg:path><svg:path stroke-linecap="round" d="M8.5 12.5h7m-7-3h7"></svg:path></svg:g>`,
})
export class BitcoinIconsMessageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
