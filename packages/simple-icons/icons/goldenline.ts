import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGoldenlineIcon],svg[simple-icons-goldenline-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.997 24a11.995 11.995 0 0 0 11.949-13.04h-6.781v2.943h1.226a6.667 6.667 0 1 1-.114-4.156h5.509A11.995 11.995 0 1 0 12 23.991z"></svg:path>`,
})
export class SimpleIconsGoldenlineIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
