import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsProxyOutlineIcon],svg[bitcoin-icons-proxy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M12 17V7"></svg:path><svg:path stroke-linejoin="round" d="M8.934 12H4m2.585 3.061L9.538 12L6.585 8.939M19.396 12h-4.934m2.585 3.061L20 12l-2.953-3.061"></svg:path></svg:g>`,
})
export class BitcoinIconsProxyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
