import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNonCertifiedIcon],svg[carbon-non-certified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h10v2H6zm0 4h8v2H6zm0 4h4v2H6z"></svg:path><svg:path fill="currentColor" d="M28 26H7.414L30 3.414L28.586 2l-2 2H4a2 2 0 0 0-2 2v16h2V6h20.586L2 28.586L3.414 30l2-2H28a2 2 0 0 0 2-2V10h-2Z"></svg:path>`,
})
export class CarbonNonCertifiedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
