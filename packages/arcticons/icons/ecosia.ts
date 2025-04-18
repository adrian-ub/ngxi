import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEcosiaIcon],svg[arcticons-ecosia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.46 43.5s-.324-3.252.652-6.376c0 0-13.141 1.691-14.183-9.37c0 0-.652-3.97 2.147-6.504c0 0 2.733-2.081 4.912 0c0 0-3.586-11.876 3.806-15.616c0 0 6.206-3.046 11.384.847c0 0 4.814 3.384 3.775 8.522c0 0 3.904-2.471 5.92.13c0 0 3.903 4.489-3.319 9.237c0 0 8.262-.066 4.685 7.027c-3.046 6.037-12.298 5.856-14.378 5.532c0 0 .195 3.643 1.3 6.57z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.805 24h-3.662v-2.448H29v-5.72H19v16.336h10v-5.591h-5.857v-2.578"></svg:path>`,
})
export class ArcticonsEcosiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
