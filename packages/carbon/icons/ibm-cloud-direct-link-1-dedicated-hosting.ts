import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDirectLink1DedicatedHostingIcon],svg[carbon-ibm-cloud-direct-link-1-dedicated-hosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 29H13c-1.1 0-2-.9-2-2v-4h2v4h14V13h-4v-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M11 19h10v2H11zm0-4h10v2H11zm0-4h10v2H11z"></svg:path><svg:path fill="currentColor" d="M5 3h14c1.1 0 2 .9 2 2v4h-2V5H5v14h4v2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2"></svg:path>`,
})
export class CarbonIbmCloudDirectLink1DedicatedHostingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
