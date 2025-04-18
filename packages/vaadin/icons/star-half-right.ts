import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfRightIcon],svg[vaadin-star-half-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 5.4l5.5.8l-4 3.8l.9 5.5L8 12.9V.4z"></svg:path>`,
})
export class VaadinStarHalfRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
