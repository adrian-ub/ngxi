import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicFolderSongIcon],svg[streamline-music-folder-song-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.645 11a.88.88 0 1 0 0-1.759a.88.88 0 0 0 0 1.76Zm3.957-1.099a.88.88 0 1 0 0-1.76a.88.88 0 0 0 0 1.76"></svg:path><svg:path d="M5.525 10.12V6.339l3.957-.932v3.616"></svg:path><svg:path d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class StreamlineMusicFolderSongIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
