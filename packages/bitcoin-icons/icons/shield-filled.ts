import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsShieldFilledIcon],svg[bitcoin-icons-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7c0-.276.225-.499.498-.535c2.149-.28 5.282-2.186 6.224-2.785a.52.52 0 0 1 .556 0c.942.599 4.075 2.504 6.224 2.785c.273.036.498.259.498.535v4.75c0 6.5-7 8.75-7 8.75s-7-2.25-7-8.75z"></svg:path>`,
})
export class BitcoinIconsShieldFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
