import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPasswordOutlineIcon],svg[bitcoin-icons-password-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="17" height="9" x="3.5" y="7.5" rx=".5"></svg:rect><svg:circle cx="7" cy="12" r="1.5"></svg:circle><svg:circle cx="12" cy="12" r="1.5"></svg:circle><svg:circle cx="17" cy="12" r="1.5"></svg:circle></svg:g>`,
})
export class BitcoinIconsPasswordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
