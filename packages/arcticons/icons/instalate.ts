import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstalateIcon],svg[arcticons-instalate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.73 12.5v23h11.5m-24.46 0h5m-5-23h5m5.46 0h5m9 17.49v5.51m-21.96-23v23m7.96 0h2.5"></svg:path>`,
})
export class ArcticonsInstalateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
