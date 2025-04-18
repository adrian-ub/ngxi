import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGraphOutlineIcon],svg[bitcoin-icons-graph-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="bitcoinIconsGraphOutline0" d="M18 18H6"></svg:path><svg:path id="bitcoinIconsGraphOutline1" d="M7 12h2v6H7zm4-6h2v12h-2zm4 3h2v9h-2z"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor"><svg:use href="#bitcoinIconsGraphOutline0" stroke-linecap="round"></svg:use><svg:use href="#bitcoinIconsGraphOutline1" stroke-linejoin="round"></svg:use><svg:use href="#bitcoinIconsGraphOutline0" stroke-linecap="round"></svg:use><svg:use href="#bitcoinIconsGraphOutline1" stroke-linejoin="round"></svg:use></svg:g>`,
})
export class BitcoinIconsGraphOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
