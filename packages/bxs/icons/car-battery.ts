import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCarBatteryIcon],svg[bxs-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2M9 14H4v-2h5zm11 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM4 3h4v2H4zm12 0h4v2h-4z"></svg:path>`,
})
export class BxsCarBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
