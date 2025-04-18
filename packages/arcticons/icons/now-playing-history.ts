import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNowPlayingHistoryIcon],svg[arcticons-now-playing-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.618 35.518A16.27 16.27 0 0 0 27.18 40.32c9.013 0 16.32-7.307 16.32-16.32S36.193 7.68 27.18 7.68S10.86 14.987 10.86 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.799 31.051l6.3-7.051H4.5z"></svg:path><svg:circle cx="25.197" cy="27.991" r="3.944" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.14 27.991V16.642m0 0h5.038v3.184H29.14z"></svg:path>`,
})
export class ArcticonsNowPlayingHistoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
