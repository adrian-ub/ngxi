import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOculusIcon],svg[arcticons-oculus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.054 36.446H16.946a12.446 12.446 0 0 1 0-24.892h14.108a12.446 12.446 0 1 1 0 24.892m-14.108-16.46a4.013 4.013 0 1 0 0 8.027h14.108a4.013 4.013 0 1 0 0-8.026Z"></svg:path>`,
})
export class ArcticonsOculusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
