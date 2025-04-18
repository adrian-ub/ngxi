import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudHyperProtectDbaasIcon],svg[carbon-ibm-cloud-hyper-protect-dbaas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 30l-2.1-1c-1.7-.8-2.9-2.6-2.9-4.5V18h10v6.5c0 1.9-1.1 3.7-2.9 4.5zm-3-10v4.5c0 1.2.7 2.2 1.7 2.7l1.3.6l1.3-.6c1-.5 1.7-1.6 1.7-2.7V20z"></svg:path><svg:circle cx="10" cy="23" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="7" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23 2H7c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h9v-2H7v-6h9v-2H7v-6h16v3h2V4c0-1.1-.9-2-2-2M7 10V4h16v6z"></svg:path>`,
})
export class CarbonIbmCloudHyperProtectDbaasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
