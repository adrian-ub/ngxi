import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOciMobileIcon],svg[arcticons-oci-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.499 8.5c7.18 0 13 6.94 13 15.5h0c0 8.56-5.82 15.5-13 15.5H17.5c-4.644 0-8.936-2.954-11.258-7.75a18.11 18.11 0 0 1 0-15.5C8.564 11.454 12.856 8.5 17.5 8.5Z"></svg:path>`,
})
export class ArcticonsOciMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
