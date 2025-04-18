import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCodeOutlineIcon],svg[bitcoin-icons-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="m10.5 16.5l3-9"></svg:path><svg:path stroke-linejoin="round" d="m16.5 8.5l3 3.5l-3 3.5m-9-7l-3 3.5l3 3.5"></svg:path></svg:g>`,
})
export class BitcoinIconsCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
