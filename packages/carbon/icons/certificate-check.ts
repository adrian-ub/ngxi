import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCertificateCheckIcon],svg[carbon-certificate-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h6v2H6zm0-4h10v2H6zm0-4h10v2H6z"></svg:path><svg:path fill="currentColor" d="M14 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10Z"></svg:path><svg:path fill="currentColor" d="M22 25.59L19.41 23L18 24.41l4 4l8-8L28.59 19z"></svg:path>`,
})
export class CarbonCertificateCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
