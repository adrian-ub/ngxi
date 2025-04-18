import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleDoubleDownIcon],svg[vaadin-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v2l5 5l5-5V2L8 7z"></svg:path><svg:path fill="currentColor" d="M3 7v2l5 5l5-5V7l-5 5z"></svg:path>`,
})
export class VaadinAngleDoubleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
