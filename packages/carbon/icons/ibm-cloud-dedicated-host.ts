import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDedicatedHostIcon],svg[carbon-ibm-cloud-dedicated-host-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h9v4h2v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 6H6V4h20zm-9 20v-2h-2v2H4v2h24v-2z"></svg:path><svg:circle cx="9" cy="20" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 24h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2m0-6h20v4H6Z"></svg:path>`,
})
export class CarbonIbmCloudDedicatedHostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
