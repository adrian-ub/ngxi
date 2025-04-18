import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRefreshOutlineIcon],svg[bitcoin-icons-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M6.446 10.512a5.75 5.75 0 0 0 8.429 6.468m2.679-3.492A5.75 5.75 0 0 0 9.125 7.02"></svg:path><svg:path stroke-linejoin="round" d="m3.75 12.5l2.5-2.5l2.5 2.5m6.5-1l2.5 2.5l2.5-2.5"></svg:path></svg:g>`,
})
export class BitcoinIconsRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
