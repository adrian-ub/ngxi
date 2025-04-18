import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnterArrowIcon],svg[vaadin-enter-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 9l7 4v-3h9V3l-3 2v2H7V4z"></svg:path>`,
})
export class VaadinEnterArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
