import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleCableCar24FilledIcon],svg[fluent-vehicle-cable-car-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.15 3.007a.75.75 0 1 1 .2 1.486l-6.85.926V7.25c0 .644-.187 1.245-.51 1.75h2.76A3.25 3.25 0 0 1 20 12.25v3.25H4v-3.25A3.25 3.25 0 0 1 7.25 9h4.001a1.75 1.75 0 0 0 1.75-1.75V5.622L2.85 6.993a.75.75 0 1 1-.201-1.486L13 4.108V3.75a.75.75 0 0 1 1.5 0v.155zM20 17v1.75A2.25 2.25 0 0 1 17.75 21H6.25A2.25 2.25 0 0 1 4 18.75V17z"></svg:path>`,
})
export class FluentVehicleCableCar24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
