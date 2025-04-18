import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOpenIcon],svg[vaadin-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.7v3.7l2-1V5zM2 3.8L0 5v1.5l2 1zM11.2 2L8 0L4.8 2zM13 3H3v4.9l3.4 1.7L8 8.4l1.6 1.2L13 7.9zm3 4.6l-5.5 2.7l5.5 4.4zm-8 2L0 16h16zm-2.5.7L0 7.6v7.1z"></svg:path>`,
})
export class VaadinEnvelopeOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
