import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDownIcon],svg[vaadin-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v2l-5 5l-5-5V4l5 5z"></svg:path>`,
})
export class VaadinAngleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
