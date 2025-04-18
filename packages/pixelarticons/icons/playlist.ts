import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPlaylistIcon],svg[pixelarticons-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h6V5h6v4h-4v10h-8zm2 2v2h4v-2zM2 17h6v2H2zm6-4H2v2h6zM2 9h12v2H2zm12-4H2v2h12z"></svg:path>`,
})
export class PixelarticonsPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
