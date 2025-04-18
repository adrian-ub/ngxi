import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMagicWandOutlineIcon],svg[bitcoin-icons-magic-wand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m14.75 12.746l-7 7.004a2.475 2.475 0 1 1-3.5-3.5l7.002-7.002a2.474 2.474 0 0 1 3.499 3.498Zm-4.717-2.23l3.451 3.45"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 13.25v3.5M19.75 15h-3.5M17 4.25v3.5M18.75 6h-3.5M7 5.25v3.5M8.75 7h-3.5"></svg:path></svg:g>`,
})
export class BitcoinIconsMagicWandOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
