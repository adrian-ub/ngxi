import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFlipVerticalOutlineIcon],svg[bitcoin-icons-flip-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 18V5M4 15.602L7.5 19l3.5-3.398M16.5 6v13M13 8.398L16.5 5L20 8.398"></svg:path>`,
})
export class BitcoinIconsFlipVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
