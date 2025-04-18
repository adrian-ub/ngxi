import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScanOutlineIcon],svg[lsicon-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 2.5H2.5V6M10 2.5h3.5V6M10 13.5h3.5V10M6 13.5H2.5V10M2 8h12"></svg:path>`,
})
export class LsiconScanOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
