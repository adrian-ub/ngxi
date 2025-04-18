import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretLeftFilledIcon],svg[bitcoin-icons-caret-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.601 4.47a.75.75 0 0 1 0 1.06l-6.364 6.364a.25.25 0 0 0 0 .354l6.364 6.364a.75.75 0 0 1-1.06 1.06L7.177 13.31a1.75 1.75 0 0 1 0-2.475L13.54 4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
