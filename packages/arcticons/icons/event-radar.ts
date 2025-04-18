import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEventRadarIcon],svg[arcticons-event-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.985 13.23c-.014.312-.047.619-.047.934a19.97 19.97 0 0 0 32.124 15.87Zm15.905 8.332l1.32-2.303"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.31 33.83S24 37.99 27.2 43.5H10.07a89 89 0 0 0 5.071-13.969M39.03 15.654a12.813 12.813 0 0 0-18.233-9.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.517 16.11a9.27 9.27 0 0 0-13.19-7.161"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.004 16.567a5.725 5.725 0 0 0-8.146-4.423"></svg:path><svg:circle cx="25.744" cy="18.328" r="1.077" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEventRadarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
