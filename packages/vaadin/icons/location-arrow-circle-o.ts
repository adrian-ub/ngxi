import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLocationArrowCircleOIcon],svg[vaadin-location-arrow-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8"></svg:path><svg:path fill="currentColor" d="m2 9l10-5l-5 10V9z"></svg:path>`,
})
export class VaadinLocationArrowCircleOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
