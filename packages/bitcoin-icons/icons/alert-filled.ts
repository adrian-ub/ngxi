import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsAlertFilledIcon],svg[bitcoin-icons-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="16.75" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 6h2v8h-2z"></svg:path>`,
})
export class BitcoinIconsAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
