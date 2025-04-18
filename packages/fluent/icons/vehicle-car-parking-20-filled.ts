import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleCarParking20FilledIcon],svg[fluent-vehicle-car-parking-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5zM13 3H6.14a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v4A1.5 1.5 0 0 0 3.5 15H15V8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4H13zm2 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 6.5a1 1 0 0 1-1-1v-1h1zm-9-1v-1H4v1a1 1 0 1 0 2 0m-1-5.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class FluentVehicleCarParking20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
