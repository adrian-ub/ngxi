import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceEq24RegularIcon],svg[fluent-device-eq-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a.75.75 0 0 1 .743.648l.007.102v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75A.75.75 0 0 1 12 3M8.255 6a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75m7.49 0a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75M4.75 9a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102L4 14.25v-4.5A.75.75 0 0 1 4.75 9m14.501 0a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.101l-.007-.101V9.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentDeviceEq24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
