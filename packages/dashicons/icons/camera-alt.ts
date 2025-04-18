import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsCameraAltIcon],svg[dashicons-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h2.94c.59 0 1.06.47 1.06 1.06v11.81c0 .59-.47 1.13-1.06 1.13H2.06C1.47 18 1 17.46 1 16.87V5.06C1 4.47 1.47 4 2.06 4H5l3-2h4zm-5 11c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class DashiconsCameraAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
