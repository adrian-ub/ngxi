import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeIcon],svg[vaadin-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h16v2.4l-8 4l-8-4z"></svg:path><svg:path fill="currentColor" d="m0 14l5.5-4.8L8 10.6l2.5-1.4L16 14zm4.6-5.2L0 6.5V13zm6.8 0L16 6.5V13z"></svg:path>`,
})
export class VaadinEnvelopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
