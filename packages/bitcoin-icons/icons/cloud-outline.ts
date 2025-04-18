import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCloudOutlineIcon],svg[bitcoin-icons-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 6.5a4 4 0 0 1 3.993 3.77A3 3 0 0 1 18.5 12.5a2 2 0 1 1 0 4h-12a3 3 0 0 1-.996-5.83L5.5 10.5a4 4 0 0 1 4-4Z"></svg:path>`,
})
export class BitcoinIconsCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
