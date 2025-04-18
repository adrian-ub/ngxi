import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudHyperProtectVsIcon],svg[carbon-ibm-cloud-hyper-protect-vs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v6.5c0 1.9 1.1 3.7 2.9 4.5l2.1 1l2.1-1c1.7-.8 2.9-2.6 2.9-4.5V18zm8 6.5c0 1.2-.7 2.2-1.7 2.7l-1.3.6l-1.3-.6c-1-.5-1.7-1.6-1.7-2.7V20h6z"></svg:path><svg:path fill="currentColor" d="M25 2H5c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h11V4h9v11h2V4c0-1.1-.9-2-2-2M13.6 12.2L5 23.9V5.1zM6 26l8-10.9V26zm8-16.1L6.8 4H14z"></svg:path>`,
})
export class CarbonIbmCloudHyperProtectVsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
