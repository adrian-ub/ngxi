import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudAddCloudNetworkInternetAddServerPlusIcon],svg[streamline-programming-cloud-add-cloud-network-internet-add-server-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8.5a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 8.5M10 11H5m2.5-2.5v5"></svg:path>`,
})
export class StreamlineProgrammingCloudAddCloudNetworkInternetAddServerPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
