import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceEq24FilledIcon],svg[fluent-device-eq-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 .993.883L9 7v10a1 1 0 0 1-1.993.117L7 17V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 .993.883L17 7v10a1 1 0 0 1-1.993.117L15 17V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 .993.883L5 10v4a1 1 0 0 1-1.993.117L3 14v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentDeviceEq24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
