import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowIcon],svg[vaadin-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 9l16-9l-9 16V9z"></svg:path>`,
})
export class VaadinLocationArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
