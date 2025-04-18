import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceinfohwIcon],svg[arcticons-deviceinfohw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.663" height="39" x="13.168" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.168 38.742h21.664m0-29.484H13.168m10.832 0v29.484M27.416 13.5h4v4h-4zm0 8.5h4v4h-4zm0 8.5h4v4h-4zm4 2h3.416m-7.416-17H24m5.416 2V22m0 4v4.5"></svg:path>`,
})
export class ArcticonsDeviceinfohwIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
