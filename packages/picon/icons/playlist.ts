import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlaylistIcon],svg[picon-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V7h6V3h1v5M0 6V0h6v6M2 1v4l2.5-2"></svg:path>`,
})
export class PiconPlaylistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
