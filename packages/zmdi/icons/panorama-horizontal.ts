import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPanoramaHorizontalIcon],svg[zmdi-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 76q-84 25-171 24q-87 0-170-24v232q83-24 170-24t171 24zm31-55q12 0 12 14v314q0 14-12 14q-4 0-7-2q-94-35-195-35T19 361q-4 2-7 2q-12 0-12-14V35q0-14 12-14q3 0 7 2q94 35 194 35q101 0 195-35q3-2 7-2"></svg:path>`,
})
export class ZmdiPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
