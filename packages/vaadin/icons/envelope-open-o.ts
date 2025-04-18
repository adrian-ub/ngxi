import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOpenOIcon],svg[vaadin-envelope-open-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.7V3h-1.5L8 0L3.4 3H2v.7L0 5v11h16V5.1zM8 1.2L10.7 3H5.2zM3 4h10v3.7L9.5 9.4L8 8.1L6.5 9.5L3 7.8zM1 5.5l1-.7v2.4l-1-.4zm0 2.4l4.6 2.3l-4.6 4zm.9 7.1L8 9.7l6.1 5.3zm13.1-.8l-4.7-4.1L15 7.8zm0-7.5l-1 .5V4.9l1 .7z"></svg:path>`,
})
export class VaadinEnvelopeOpenOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
