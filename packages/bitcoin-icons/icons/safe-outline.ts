import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSafeOutlineIcon],svg[bitcoin-icons-safe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="13" height="13" x="5.5" y="5.5" rx="1"></svg:rect><svg:rect width="9" height="9" x="7.5" y="7.5" rx=".5"></svg:rect><svg:path stroke-linecap="square" d="M8.5 19.5h-1m9 0h-1"></svg:path><svg:circle cx="12" cy="12" r="1.25"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.5 9.5L11 11m-1.5 3.5L11 13m2 0l1.5 1.5M13 11l1.5-1.5"></svg:path></svg:g>`,
})
export class BitcoinIconsSafeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
