import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryFillIcon],svg[ph-car-battery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16V56a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16h-32V56a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v16H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M64 56h32v16H64Zm40 88H72a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m80 0h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16m8-72h-32V56h32Z"></svg:path>`,
})
export class PhCarBatteryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
