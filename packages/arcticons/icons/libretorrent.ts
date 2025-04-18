import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibretorrentIcon],svg[arcticons-libretorrent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.289 7.314A19.01 19.01 0 0 0 6.283 35.637m34.789-14.105A19.03 19.03 0 0 0 26.833 7.314M12.272 41.808a19.008 19.008 0 0 0 28.806-11.703"></svg:path><svg:circle cx="22.561" cy="6.832" r="4.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.561" cy="25.832" r="4.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.278" cy="38.721" r="4.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.243 34.886c7.228-6.757 13.616-9.63 24.018-9.332"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.548 11.132c-.091 7.61-1.006 15.314-10.148 24.634"></svg:path>`,
})
export class ArcticonsLibretorrentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
