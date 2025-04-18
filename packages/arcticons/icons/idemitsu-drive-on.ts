import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdemitsuDriveOnIcon],svg[arcticons-idemitsu-drive-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 38.5h37L24 9.5zm17.344-16.313h-6.938m10.406 5.438H12.436m17.345 5.437H8.969"></svg:path>`,
})
export class ArcticonsIdemitsuDriveOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
