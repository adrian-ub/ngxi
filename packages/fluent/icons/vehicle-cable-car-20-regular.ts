import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleCableCar20RegularIcon],svg[fluent-vehicle-cable-car-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.434 3.004a.5.5 0 1 1 .132.992L12 4.738V6a3 3 0 0 1-.764 2H13a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2V4.871L2.566 5.996a.5.5 0 1 1-.132-.992L11 3.862V3.5a.5.5 0 1 1 1 0v.229zM15 11a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2h10zM5 14v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1z"></svg:path>`,
})
export class FluentVehicleCableCar20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
