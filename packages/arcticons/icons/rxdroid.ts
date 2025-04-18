import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRxdroidIcon],svg[arcticons-rxdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="43.995" height="20.112" x="2.002" y="13.944" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.056" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.111 31.111L16.889 16.889"></svg:path>`,
})
export class ArcticonsRxdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
