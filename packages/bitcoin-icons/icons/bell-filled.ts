import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBellFilledIcon],svg[bitcoin-icons-bell-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 5.374a2.001 2.001 0 0 1 3.8 0A5 5 0 0 1 17 10v4l2.146 2.146a.5.5 0 0 1-.353.854H5.207a.5.5 0 0 1-.353-.854L7 14v-4a5 5 0 0 1 3.1-4.626M10 18a2 2 0 1 0 4 0z"></svg:path>`,
})
export class BitcoinIconsBellFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
