import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMytelkomselIcon],svg[arcticons-mytelkomsel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.558 43.5c-1.662-5.297 12.827-14.125 12.827-21.707c0-7.27-12.256-15.216-15.943-17.293C24.104 9.797 9.615 18.625 9.615 26.207c0 7.27 12.256 15.216 15.943 17.293M27 18.5h1.969m-9.938 0H24m0 15v-15"></svg:path>`,
})
export class ArcticonsMytelkomselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
