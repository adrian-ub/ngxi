import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYamiyamiIcon],svg[arcticons-yamiyami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 28v11.5a3 3 0 1 0 6 0V25.242l14.621-14.62a3 3 0 0 0-4.242-4.243L19.758 24L6.378 10.621a3 3 0 0 1 4.243-4.242l11.38 11.379"></svg:path>`,
})
export class ArcticonsYamiyamiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
