import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDirectLink2DedicatedIcon],svg[carbon-ibm-cloud-direct-link-2-dedicated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 11h-3V5c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v4h2V5h14v14H13v-4h-2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h3z"></svg:path><svg:path fill="currentColor" d="M21 17v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6H0v2h3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V13h14v4z"></svg:path>`,
})
export class CarbonIbmCloudDirectLink2DedicatedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
