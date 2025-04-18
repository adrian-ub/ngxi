import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFileOutlineIcon],svg[bitcoin-icons-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.5 6A1.5 1.5 0 0 1 8 4.5h5.5l4 4V18a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18z"></svg:path><svg:path stroke-linejoin="round" d="M13 4.5V9h4.5"></svg:path></svg:g>`,
})
export class BitcoinIconsFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
