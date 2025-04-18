import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfRightOIcon],svg[vaadin-star-half-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 6.2l-5.5-.8L8 .4l-2.4 5l-5.5.8L4 10l-.9 5.4L8 12.9l4.9 2.6L12 10zM4.4 13.7l.7-4l-2.9-2.8l4-.6L8 2.7v9.1z"></svg:path>`,
})
export class VaadinStarHalfRightOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
