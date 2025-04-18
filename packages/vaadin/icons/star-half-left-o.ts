import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfLeftOIcon],svg[vaadin-star-half-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 6.2l-5.5-.8L8 .4l-2.4 5l-5.5.8L4 10l-.9 5.4L8 12.9l4.9 2.6L12 10zM8 11.8V2.7l1.8 3.6l4 .6l-2.9 2.8l.7 4z"></svg:path>`,
})
export class VaadinStarHalfLeftOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
