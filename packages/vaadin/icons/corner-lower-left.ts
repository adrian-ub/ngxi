import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerLowerLeftIcon],svg[vaadin-corner-lower-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16L0 0v16z"></svg:path>`,
})
export class VaadinCornerLowerLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
