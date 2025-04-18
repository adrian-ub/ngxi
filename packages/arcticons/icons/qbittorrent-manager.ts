import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQbittorrentManagerIcon],svg[arcticons-qbittorrent-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.153 13.528l23.32 23.32a16.53 16.53 0 0 1-10.347 3.62c-9.17 0-16.593-7.423-16.593-16.594a16.53 16.53 0 0 1 3.62-10.346m26.986 19.254a16.56 16.56 0 0 0 2.581-8.908c0-9.17-7.423-16.593-16.594-16.593a16.57 16.57 0 0 0-8.907 2.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.103 42.489l-5.63-5.641l-23.32-23.32L5.5 7.875"></svg:path>`,
})
export class ArcticonsQbittorrentManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
