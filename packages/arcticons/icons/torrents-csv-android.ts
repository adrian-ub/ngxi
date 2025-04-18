import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTorrentsCsvAndroidIcon],svg[arcticons-torrents-csv-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.805 37.4c0 2.817-7.076 5.1-15.805 5.1S8.195 40.217 8.195 37.4m0-26.8c0-2.817 7.076-5.1 15.805-5.1s15.805 2.283 15.805 5.1m0 13.285c-1.421 1.368-7.076 3.572-15.805 3.572S9.57 25.298 8.195 23.885m31.61-7.981c-1.421 1.368-7.076 3.572-15.805 3.572S9.57 17.318 8.195 15.904m31.61 15.822c-1.421 1.369-7.076 3.572-15.805 3.572S9.57 33.14 8.195 31.726m0 5.661V10.586m31.61 0v26.801"></svg:path>`,
})
export class ArcticonsTorrentsCsvAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
