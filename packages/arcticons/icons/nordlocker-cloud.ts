import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNordlockerCloudIcon],svg[arcticons-nordlocker-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.59 36.89c-7.003-9.732-4.792-23.299 4.94-30.303A21.7 21.7 0 0 1 24 2.5c11.99.117 21.614 9.93 21.498 21.92a21.7 21.7 0 0 1-4.088 12.47L31.08 20l-1.86 3.17l1.88 3.23L24 14.17l-5.27 9l1.9 3.27L16.91 20z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.595 38.858h7.993c4.338 0 3.612-6.529-.739-5.081c0-3.626-6.529-3.626-6.529.726c-3.629-.726-3.629 4.355-.726 4.355Z"></svg:path>`,
})
export class ArcticonsNordlockerCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
