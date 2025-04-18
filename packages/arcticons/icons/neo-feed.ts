import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeoFeedIcon],svg[arcticons-neo-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.263 20H37.8a1 1 0 0 1 1 1v7l-1.59-.762l-1.59.762l-1.59-.762l-1.59.762l-1.59-.762l-1.587.762v-7a1 1 0 0 1 1-1m1.855 2.517h3.827m-3.827 2.587h3.827"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.144 30.894A9.75 9.75 0 1 1 14.25 14.25c5.385 0 7.85 5.287 9.75 9.75c2.11 4.954 4.365 9.75 9.75 9.75a9.75 9.75 0 1 0-6.894-16.644M7.75 24h13m-11-4h9m-9 8h9"></svg:path>`,
})
export class ArcticonsNeoFeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
