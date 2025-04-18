import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCloudLoggingIcon],svg[carbon-cloud-logging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16v6H4V6h11V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6zM18 28h-4v-4h4zm0-24h12v2H18z"></svg:path><svg:path fill="currentColor" d="M18 8h12v2H18zm0 4h6v2h-6z"></svg:path>`,
})
export class CarbonCloudLoggingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
