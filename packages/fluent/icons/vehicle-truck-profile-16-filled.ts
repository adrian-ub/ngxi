import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleTruckProfile16FilledIcon],svg[fluent-vehicle-truck-profile-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h5.5c.967 0 1.75.784 1.75 1.75V4h.382a1.5 1.5 0 0 1 1.342.83l1.118 2.235a1.5 1.5 0 0 1 .158.671V11a1.5 1.5 0 0 1-1.5 1.5h-.563a2 2 0 0 1-3.874 0H6.937a2 2 0 0 1-3.907-.155A1.75 1.75 0 0 1 2 10.75zM11 5v2h1.691l-.862-1.724A.5.5 0 0 0 11.382 5zm-6 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4 1a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentVehicleTruckProfile16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
