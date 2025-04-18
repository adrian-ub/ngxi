import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHermesIcon],svg[arcticons-hermes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.245 19.058l-7.463-.7L4.5 31.899l24.331 3.244V20.615l-9.6-.901m9.6 15.429L43.5 27.456V14.691l-14.669 5.924"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.782 18.358l14.449-5.501l8.33.564l-15.316 5.637v4.025l6.986 1.129v-4.498l14.21-5.791l10.059.768"></svg:path>`,
})
export class ArcticonsHermesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
