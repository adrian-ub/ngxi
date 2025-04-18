import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceEq20RegularIcon],svg[fluent-device-eq-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15A.5.5 0 0 1 10 2m3.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5M7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zM16.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentDeviceEq20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
