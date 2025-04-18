import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAndroidIcon],svg[tdesign-logo-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.372 3.636l2.116 3.702A11.95 11.95 0 0 1 12 6c1.986 0 3.86.483 5.512 1.338l2.116-3.702l1.736.992l-2.158 3.776A11.98 11.98 0 0 1 24 18v2H0v-2c0-3.924 1.884-7.407 4.793-9.596L2.636 4.628zM12 8a9.95 9.95 0 0 0-5.348 1.55A9.99 9.99 0 0 0 2 18h20a9.99 9.99 0 0 0-4.652-8.451A9.95 9.95 0 0 0 12 8m-6 5h2.004v2.004H6zm10 0h2.004v2.004H16z"></svg:path>`,
})
export class TdesignLogoAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
