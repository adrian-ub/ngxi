import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScannerIcon],svg[picon-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V7H0V5h8v2H7v1m1-3L0 1V0l8 4M2 5L1 6l1 1l1-1"></svg:path>`,
})
export class PiconScannerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
