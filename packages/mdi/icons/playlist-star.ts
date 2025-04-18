import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistStarIcon],svg[mdi-playlist-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 19.1l2.5 1.5l-.7-2.8l2.2-1.9l-2.9-.2L17 13l-1.1 2.6l-2.9.3l2.2 1.9l-.7 2.8zM3 14h8v2H3zm0-8h12v2H3zm0 4h12v2H3z"></svg:path>`,
})
export class MdiPlaylistStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
