import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVLauncherIcon],svg[arcticons-v-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.12 4.5l15.872 35.926M24 43.5l15.519-11.136L40.88 4.5L24 14.93L7.12 4.5l1.361 27.864z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.889 24.795L24 43.5L8.111 23.596m18.483 16.83h-5.048M40.88 4.5L25.008 40.426M24 14.93L8.111 23.596m31.778 1.199L24 14.93"></svg:path>`,
})
export class ArcticonsVLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
