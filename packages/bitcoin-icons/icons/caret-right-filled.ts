import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretRightFilledIcon],svg[bitcoin-icons-caret-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.399 4.328a.75.75 0 0 1 1.06 0l6.364 6.363a1.75 1.75 0 0 1 0 2.475L10.46 19.53a.75.75 0 0 1-1.06-1.06l6.364-6.364a.25.25 0 0 0 0-.354L9.399 5.388a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
