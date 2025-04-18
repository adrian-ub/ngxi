import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsVisibleOutlineIcon],svg[bitcoin-icons-visible-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="12" cy="12" rx="8.5" ry="4.5"></svg:ellipse><svg:circle cx="12" cy="12" r="1.5"></svg:circle></svg:g>`,
})
export class BitcoinIconsVisibleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
