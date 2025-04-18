import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudBareMetalServersVpcIcon],svg[carbon-ibm-cloud-bare-metal-servers-vpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 24v4c0 1.1.9 2 2 2h12v-2H6v-4h12v-2H6c-1.1 0-2 .9-2 2m0-11v5c0 1.1.9 2 2 2h8v-2H6v-5z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 19v-5c0-1.1-.9-2-2-2h-8v2h8v5zm0-11V4c0-1.1-.9-2-2-2H14v2h12v4H14v2h12c1.1 0 2-.9 2-2"></svg:path><svg:path fill="currentColor" d="M23.41 22L10 8.59V2H2v8h6.59L22 23.41V30h8v-8zM8 8H4V4h4zm20 20h-4v-4h4z"></svg:path>`,
})
export class CarbonIbmCloudBareMetalServersVpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
