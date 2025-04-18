import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHomeIcon],svg[vaadin-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"></svg:path><svg:path fill="currentColor" d="M8 4L2 8v7h5v-3h2v3h5V8z"></svg:path>`,
})
export class VaadinHomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
