import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceUnlockIcon],svg[arcticons-device-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.489V39.5c0 2.216-1.784 4-4 4h-23c-2.216 0-4-1.784-4-4v-31c0-2.216 1.784-4 4-4h16.011z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.351 33.354h4.874l-2.512-9.362a4.555 4.555 0 1 0-3.412-.004l-2.503 9.366h4.874M8.794 20.686h10.61m9.104 0H39.34m-30.611 3.1h13.129m4.356 0h12.932M8.489 27.107h12.728m5.406 0h12.61"></svg:path>`,
})
export class ArcticonsDeviceUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
