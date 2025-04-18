import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPlaylistIcon],svg[bxs-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.5 3.5 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493M2 5h14v2H2z"></svg:path><svg:path fill="currentColor" d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></svg:path>`,
})
export class BxsPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
