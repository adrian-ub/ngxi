import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScanIcon],svg[picon-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v1H0V4m3-4v1H1v2H0V0m5 1V0h3v3H7V1m0 5v1H5v1h3V6M1 6v1h2v1H0V6"></svg:path>`,
})
export class PiconScanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
