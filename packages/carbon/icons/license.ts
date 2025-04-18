import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLicenseIcon],svg[carbon-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h12v2H10zm0 4h12v2H10zm0 14h6v2h-6zm0-10h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M24 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M8 4v24h16V4Z"></svg:path>`,
})
export class CarbonLicenseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
