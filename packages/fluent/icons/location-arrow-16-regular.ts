import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow16RegularIcon],svg[fluent-location-arrow-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.93 3.362c.31-.81-.484-1.604-1.293-1.293L2.64 5.915c-.906.348-.834 1.653.105 1.9l4.024 1.06a.5.5 0 0 1 .357.356l1.059 4.024c.247.94 1.552 1.01 1.9.105zm-.934-.36l-3.845 9.999l-1.06-4.025a1.5 1.5 0 0 0-1.068-1.069L2.998 6.848z"></svg:path>`,
})
export class FluentLocationArrow16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
