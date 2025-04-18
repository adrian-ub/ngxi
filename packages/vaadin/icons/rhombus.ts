import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinRhombusIcon],svg[vaadin-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 8l8 8l8-8zM2 8l6-6l6 6l-6 6z"></svg:path>`,
})
export class VaadinRhombusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
