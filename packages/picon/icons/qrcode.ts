import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconQrcodeIcon],svg[picon-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3h5V0M0 3v5h3V3M0 5V0h5v5m2 2V4H4v3m3-6v1H6V1M2 2V1H1v1m0 5V6h1v1"></svg:path>`,
})
export class PiconQrcodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
