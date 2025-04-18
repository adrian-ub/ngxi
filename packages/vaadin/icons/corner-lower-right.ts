import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerLowerRightIcon],svg[vaadin-corner-lower-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16H0L16 0z"></svg:path>`,
})
export class VaadinCornerLowerRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
