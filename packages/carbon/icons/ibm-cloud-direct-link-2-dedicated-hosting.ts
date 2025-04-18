import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDirectLink2DedicatedHostingIcon],svg[carbon-ibm-cloud-direct-link-2-dedicated-hosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 27H5V13h4v-2H5c-1.1 0-2 .9-2 2v6H0v2h3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2z"></svg:path><svg:path fill="currentColor" d="M11 19h10v2H11zm0-4h10v2H11zm0-4h10v2H11z"></svg:path><svg:path fill="currentColor" d="M29 11V5c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v4h2V5h14v14h-4v2h4c1.1 0 2-.9 2-2v-6h3v-2z"></svg:path>`,
})
export class CarbonIbmCloudDirectLink2DedicatedHostingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
