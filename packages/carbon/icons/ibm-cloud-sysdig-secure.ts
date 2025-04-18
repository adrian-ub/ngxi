import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudSysdigSecureIcon],svg[carbon-ibm-cloud-sysdig-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 14l-2.1-1c-1.7-.8-2.9-2.6-2.9-4.5V2h10v6.5c0 1.9-1.1 3.7-2.9 4.5zM22 4v4.5c0 1.2.7 2.2 1.7 2.7l1.3.6l1.3-.6c1-.5 1.7-1.6 1.7-2.7V4z"></svg:path><svg:path fill="currentColor" d="M28 16v6H4V6h12V4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8v4H8v2h16v-2h-4v-4h8c1.1 0 2-.9 2-2v-6zM18 28h-4v-4h4z"></svg:path>`,
})
export class CarbonIbmCloudSysdigSecureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
