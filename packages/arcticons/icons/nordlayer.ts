import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNordlayerIcon],svg[arcticons-nordlayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.59 36.89c-7.003-9.732-4.792-23.299 4.94-30.303A21.7 21.7 0 0 1 24 2.5c11.99.117 21.614 9.93 21.498 21.92a21.7 21.7 0 0 1-4.088 12.47L31.08 20l-1.86 3.17l1.88 3.23L24 14.17l-5.27 9l1.9 3.27L16.91 20zm9.91 1.968h15"></svg:path>`,
})
export class ArcticonsNordlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
