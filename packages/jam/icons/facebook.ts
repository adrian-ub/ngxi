import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFacebookIcon],svg[jam-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865"></svg:path>`,
})
export class JamFacebookIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
