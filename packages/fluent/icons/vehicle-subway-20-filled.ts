import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleSubway20FilledIcon],svg[fluent-vehicle-subway-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1zM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.681 2.983l2.384 1.06a.5.5 0 1 1-.406.914L11.894 17H8.106l-4.403 1.957a.5.5 0 1 1-.406-.914l2.385-1.06A3 3 0 0 1 3 14zm1 0v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m4 8a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentVehicleSubway20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
