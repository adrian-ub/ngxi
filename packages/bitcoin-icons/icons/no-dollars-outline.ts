import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNoDollarsOutlineIcon],svg[bitcoin-icons-no-dollars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:path stroke-linejoin="round" d="m5.75 5.75l12.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 6v12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.567 9.37c-.17-.755-1.145-1.595-2.57-1.595s-2.52.925-2.52 2.094c0 2.655 5.285 1.291 5.285 4.372c0 1.114-1.34 2.059-2.765 2.059s-2.411-.877-2.703-1.815"></svg:path></svg:g>`,
})
export class BitcoinIconsNoDollarsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
