import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsEllipsisOutlineIcon],svg[bitcoin-icons-ellipsis-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="7" cy="12" r="1"></svg:circle><svg:circle cx="12.5" cy="12" r="1"></svg:circle><svg:circle cx="18" cy="12" r="1"></svg:circle></svg:g>`,
})
export class BitcoinIconsEllipsisOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
