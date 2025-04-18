import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFlipHorizontalOutlineIcon],svg[bitcoin-icons-flip-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 16.5h13M8.398 20L5 16.5L8.398 13M18 7.5H5M15.602 11L19 7.5L15.6 4"></svg:path>`,
})
export class BitcoinIconsFlipHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
