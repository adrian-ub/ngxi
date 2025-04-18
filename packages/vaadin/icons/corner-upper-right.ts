import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerUpperRightIcon],svg[vaadin-corner-upper-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16L0 0h16z"></svg:path>`,
})
export class VaadinCornerUpperRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
