import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyPassportWirelessIcon],svg[arcticons-my-passport-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.636c0 5.312-4.315 9.627-9.627 9.627h-21.17A8.207 8.207 0 0 1 4.5 27.06c0-2.264.919-4.315 2.41-5.794a8.14 8.14 0 0 1 5.793-2.41h.012a11.06 11.06 0 0 1 9.907-6.119c3.305 0 6.275 1.446 8.304 3.732a9.5 9.5 0 0 1 2.947-.46a9.6 9.6 0 0 1 6.836 2.847a9.6 9.6 0 0 1 2.79 6.78Z"></svg:path>`,
})
export class ArcticonsMyPassportWirelessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
