import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCloudFilledIcon],svg[bitcoin-icons-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6a4.5 4.5 0 0 1 4.366 3.404a3.5 3.5 0 0 1 5.105 2.64A2.5 2.5 0 0 1 18.5 17h-12a3.5 3.5 0 0 1-1.497-6.665A4.5 4.5 0 0 1 9.5 6"></svg:path>`,
})
export class BitcoinIconsCloudFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
