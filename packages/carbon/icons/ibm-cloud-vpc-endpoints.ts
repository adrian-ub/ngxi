import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudVpcEndpointsIcon],svg[carbon-ibm-cloud-vpc-endpoints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 27H7a2.006 2.006 0 0 1-2-2V12h2v13h13Z"></svg:path><svg:path fill="currentColor" d="m23.4 22l-4-4a3.6 3.6 0 0 0 .6-2a4.01 4.01 0 0 0-4-4a3.6 3.6 0 0 0-2 .6l-4-4V2H2v8h6.6l4 4a3.6 3.6 0 0 0-.6 2a4.01 4.01 0 0 0 4 4a3.6 3.6 0 0 0 2-.6l4 4V30h8v-8ZM8 8H4V4h4Zm8 10a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2m12 10h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M25 20h2V7a2.006 2.006 0 0 0-2-2H12v2h13Z"></svg:path>`,
})
export class CarbonIbmCloudVpcEndpointsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
