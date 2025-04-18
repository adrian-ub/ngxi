import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistRemoveIcon],svg[mdi-playlist-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.4 6l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6l2.6-2.6l-1.4-1.4l-2.6 2.6l-2.6-2.6l-1.4 1.4l2.6 2.6l-2.6 2.6z"></svg:path>`,
})
export class MdiPlaylistRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
