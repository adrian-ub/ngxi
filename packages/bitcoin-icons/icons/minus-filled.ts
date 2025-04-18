import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMinusFilledIcon],svg[bitcoin-icons-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.85 11.25h14.302a.75.75 0 1 1 0 1.5H4.85a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
