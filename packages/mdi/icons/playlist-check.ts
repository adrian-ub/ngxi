import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistCheckIcon],svg[mdi-playlist-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm18.5-4.5L23 13l-7 7l-4.5-4.5L13 14l3 3z"></svg:path>`,
})
export class MdiPlaylistCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
