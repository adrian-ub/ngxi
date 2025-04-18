import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCloudIcon],svg[websymbol-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1435 718q0 111-75.5 192.5T1174 1000v1H304v-1q-7 1-21 1q-117 0-200-83T0 718q0-74 37-139t101-103q-8-32-8-62q0-117 83-200t200-83q103 0 186 70q43-91 128.5-145.5T913 1q144 0 246 102t102 246q0 55-16 103q85 29 137.5 103t52.5 163"></svg:path>`,
})
export class WebsymbolCloudIcon {
  readonly viewBox = input("0 0 1435 1000")
  readonly width = input("1.44em")
  readonly height = input("1em")
}
