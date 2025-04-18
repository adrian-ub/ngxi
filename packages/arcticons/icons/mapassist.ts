import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMapassistIcon],svg[arcticons-mapassist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.13 18.75a8.06 8.06 0 0 1-2.3-9a8.14 8.14 0 0 1 15.3.1a8.31 8.31 0 0 1-2.5 9"></svg:path><svg:path fill="none" stroke="currentColor" d="m13.53 32.25l6.5 1.4V13a2.36 2.36 0 1 1 4.7 0v11.6h2.4l9.5 4.8a2.53 2.53 0 0 1 .9 2.2L36 41.85a2.74 2.74 0 0 1-1.9 1.7H20.93a2.06 2.06 0 0 1-1.8-1l-8.7-8.7l1.1-1.1c.4-.7 1.1-.6 2-.5Z"></svg:path>`,
})
export class ArcticonsMapassistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
