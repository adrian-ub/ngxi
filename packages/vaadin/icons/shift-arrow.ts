import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinShiftArrowIcon],svg[vaadin-shift-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L1 9h4v5h6V9h4zm2 6v5H6V8H3.5L8 3.42L12.5 8z"></svg:path>`,
})
export class VaadinShiftArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
