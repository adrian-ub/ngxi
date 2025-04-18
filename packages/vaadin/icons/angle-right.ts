import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleRightIcon],svg[vaadin-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13h2l5-5l-5-5H4l5 5z"></svg:path>`,
})
export class VaadinAngleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
