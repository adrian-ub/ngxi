import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleUpIcon],svg[vaadin-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14v-2L8 7l-5 5v2l5-5z"></svg:path><svg:path fill="currentColor" d="M13 9V7L8 2L3 7v2l5-5z"></svg:path>`,
})
export class VaadinAngleDoubleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
