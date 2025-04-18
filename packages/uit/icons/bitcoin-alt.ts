import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitBitcoinAltIcon],svg[uit-bitcoin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.722 11.548A3.735 3.735 0 0 0 13.25 5H12V3.5a.5.5 0 0 0-1 0V5H8V3.5a.5.5 0 0 0-1 0V5H5.5a.5.5 0 0 0 0 1H7v12H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V19h3v1.5a.5.5 0 0 0 1 0V19h3.25a3.74 3.74 0 0 0 .472-7.452M8 6h5.25a2.75 2.75 0 1 1 0 5.5H8zm7.25 12H8v-5.5h7.25a2.75 2.75 0 1 1 0 5.5"></svg:path>`,
})
export class UitBitcoinAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
