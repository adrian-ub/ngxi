import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleLeftIcon],svg[vaadin-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h-2L7 8l5 5h2L9 8z"></svg:path><svg:path fill="currentColor" d="M9 3H7L2 8l5 5h2L4 8z"></svg:path>`,
})
export class VaadinAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
