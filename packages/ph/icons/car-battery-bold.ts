import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryBoldIcon],svg[ph-car-battery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 140a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12m-100-12H68a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m144-36v92a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h12V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h24V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h12a20 20 0 0 1 20 20m-80-20h24V60h-24Zm-96 0h24V60H68Zm152 24H36v84h184Z"></svg:path>`,
})
export class PhCarBatteryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
