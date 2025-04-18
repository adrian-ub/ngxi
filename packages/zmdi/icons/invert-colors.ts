import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiInvertColorsIcon],svg[zmdi-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M291 121q50 50 50 121t-50 120.5T170.5 412T50 362.5T0 242t50-121L171 0zM171 370V61l-91 90q-37 38-37 91t37 90q37 38 91 38"></svg:path>`,
})
export class ZmdiInvertColorsIcon {
  readonly viewBox = input("0 0 344 416")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
