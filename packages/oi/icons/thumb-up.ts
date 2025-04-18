import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiThumbUpIcon],svg[oi-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 0C4.28.02 4.1.15 4 .34C3.87.6 2.91 2.53 2.72 2.72S2.28 3 2 3v4h3.5c.21 0 .39-.13.47-.31C5.97 6.69 7 3.78 7 3.5S6.78 3 6.5 3H5c-.28 0-.5-.25-.5-.5S4.89.92 4.97.66a.504.504 0 0 0-.31-.63C4.59.01 4.54-.01 4.47 0M0 3v4h1V3z"></svg:path>`,
})
export class OiThumbUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
