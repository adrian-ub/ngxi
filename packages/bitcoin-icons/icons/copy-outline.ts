import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCopyOutlineIcon],svg[bitcoin-icons-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="9" height="13" x="6.5" y="6.5" rx="1.5"></svg:rect><svg:path d="M8.5 6A1.5 1.5 0 0 1 10 4.5h6A1.5 1.5 0 0 1 17.5 6v10a1.5 1.5 0 0 1-1.5 1.5"></svg:path></svg:g>`,
})
export class BitcoinIconsCopyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
