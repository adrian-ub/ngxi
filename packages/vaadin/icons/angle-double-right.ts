import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleRightIcon],svg[vaadin-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h2l5-5l-5-5H2l5 5z"></svg:path><svg:path fill="currentColor" d="M7 13h2l5-5l-5-5H7l5 5z"></svg:path>`,
})
export class VaadinAngleDoubleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
