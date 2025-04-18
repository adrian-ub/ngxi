import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBattery028RegularIcon],svg[fluent-battery-0-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 7A3.75 3.75 0 0 0 2 10.75v6.5A3.75 3.75 0 0 0 5.75 21h14.5A3.75 3.75 0 0 0 24 17.25V16h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1v-1.25A3.75 3.75 0 0 0 20.25 7zM3.5 10.75A2.25 2.25 0 0 1 5.75 8.5h14.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentBattery028RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
