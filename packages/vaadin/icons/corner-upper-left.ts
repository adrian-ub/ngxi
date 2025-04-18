import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCornerUpperLeftIcon],svg[vaadin-corner-upper-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16L16 0H0z"></svg:path>`,
})
export class VaadinCornerUpperLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
