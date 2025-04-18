import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfLeftIcon],svg[vaadin-star-half-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.6 5.4l-5.5.8L4 10l-.9 5.5L8 12.9V.4z"></svg:path>`,
})
export class VaadinStarHalfLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
