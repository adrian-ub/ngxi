import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlaylistRepeatSongFillIcon],svg[iconamoon-playlist-repeat-song-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 9a1 1 0 1 1-2 0V5.618l-.553.276a1 1 0 1 1-.894-1.788l2-1A1 1 0 0 1 22 4zM6 19a1 1 0 0 1-1.707.707l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 6 15v1h11a3 3 0 0 0 3-3a1 1 0 1 1 2 0a5 5 0 0 1-4.998 5H6zM16 7a1 1 0 0 0-1-1H7a5 5 0 0 0-5 5a1 1 0 1 0 2 0a3 3 0 0 1 3-3h8a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonPlaylistRepeatSongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
