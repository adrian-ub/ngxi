import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow20RegularIcon],svg[fluent-location-arrow-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.93 3.362c.31-.81-.484-1.604-1.293-1.293L2.64 7.453c-.906.348-.834 1.653.105 1.9l5.973 1.572a.5.5 0 0 1 .356.356l1.572 5.974c.247.938 1.552 1.01 1.9.104zm-.934-.36L11.613 17l-1.572-5.973a1.5 1.5 0 0 0-1.069-1.069L3 8.386z"></svg:path>`,
})
export class FluentLocationArrow20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
