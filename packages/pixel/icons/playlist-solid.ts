import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPlaylistSolidIcon],svg[pixel-playlist-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h12v3H1zm0 6h12v3H1zm0 6h6v3H1z"></svg:path><svg:path fill="currentColor" d="M23 1v6h-2v1h-2v13h-1v1h-1v1h-5v-1h-2v-1H9v-3h1v-1h2v-1h4V4h1V3h2V2h2V1z"></svg:path>`,
})
export class PixelPlaylistSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
