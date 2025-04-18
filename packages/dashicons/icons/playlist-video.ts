import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsPlaylistVideoIcon],svg[dashicons-playlist-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3V1H2v2zm0 4V5H2v2zM6 11V9H2v2zm2-2h9c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1m3 7l3.33-2L11 12zm-5-1v-2H2v2zm0 4v-2H2v2z"></svg:path>`,
})
export class DashiconsPlaylistVideoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
