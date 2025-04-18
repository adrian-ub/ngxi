import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAlertingIcon],svg[carbon-cloud-alerting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 17v5H4V6h11V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-5ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M29 14H17a1 1 0 0 1-.857-1.514l6-10a1 1 0 0 1 1.715 0l6 10A1 1 0 0 1 29 14m-10.234-2h8.468L23 4.944Z"></svg:path>`,
})
export class CarbonCloudAlertingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
