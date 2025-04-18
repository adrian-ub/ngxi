import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlaylistRepeatSongThinIcon],svg[iconamoon-playlist-repeat-song-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M21 9V4l-2 1m-4 2H7M5 19l-2-2m0 0l2-2m-2 2h14"></svg:path><svg:path d="M3 11a4 4 0 0 1 4-4m14 6a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class IconamoonPlaylistRepeatSongThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
