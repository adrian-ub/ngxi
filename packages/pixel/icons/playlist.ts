import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPlaylistIcon],svg[pixel-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v1h-2v1h-2v1h-1v12h-4v1h-2v1H9v3h1v1h2v1h5v-1h1v-1h1V8h2V7h2V1zM11 20v-1h1v-1h5v2h-1v1h-4v-1zm8-14v1h-1V5h1V4h2v2zM1 15h6v2H1z"></svg:path><svg:path fill="currentColor" d="M1 9h12v2H1zm0-6h12v2H1z"></svg:path>`,
})
export class PixelPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
