import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUnmixedOutlineIcon],svg[bitcoin-icons-unmixed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 17.5H5M15.602 21L19 17.5L15.602 14M18 6.5H5M15.602 10L19 6.5L15.602 3"></svg:path>`,
})
export class BitcoinIconsUnmixedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
