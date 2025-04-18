import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow48RegularIcon],svg[fluent-location-arrow-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.827 7.403c.777-2.021-1.21-4.008-3.231-3.23L5.603 17.63c-2.265.872-2.086 4.134.26 4.752l14.933 3.93c.436.114.777.454.891.89l3.93 14.932c.617 2.347 3.88 2.526 4.75.262zm-2.334-.897L28.034 41.499l-3.93-14.932a3.75 3.75 0 0 0-2.671-2.672L6.5 19.965z"></svg:path>`,
})
export class FluentLocationArrow48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
