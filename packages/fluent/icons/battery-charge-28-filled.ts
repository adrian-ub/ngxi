import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBatteryCharge28FilledIcon],svg[fluent-battery-charge-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.75a.75.75 0 0 0-1.5 0V7h-.75a.75.75 0 0 0-.75.75v2.5c0 .966.784 1.75 1.75 1.75h1v8.25a.75.75 0 0 0 1.5 0V12h1A1.75 1.75 0 0 0 9 10.25v-2.5A.75.75 0 0 0 8.25 7H7.5V5.75a.75.75 0 0 0-1.5 0V7H5zM24 16v1.25A3.75 3.75 0 0 1 20.25 21h-12a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h.25a1.5 1.5 0 0 0 1.5-1.5V8a1 1 0 0 1 1-1h9.25A3.75 3.75 0 0 1 24 10.75V12h.75c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25z"></svg:path>`,
})
export class FluentBatteryCharge28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
