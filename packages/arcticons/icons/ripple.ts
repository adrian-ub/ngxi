import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRippleIcon],svg[arcticons-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5A14.27 14.27 0 0 1 9.75 29.32C9.75 19.89 24 4.5 24 4.5s14.25 15.39 14.25 24.82A14.27 14.27 0 0 1 24 43.5"></svg:path>`,
})
export class ArcticonsRippleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
