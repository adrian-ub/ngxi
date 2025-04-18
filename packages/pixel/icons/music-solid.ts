import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMusicSolidIcon],svg[pixel-music-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1v17h-1v1h-1v1h-4v-1h-1v-1h-1v-3h1v-1h1v-1h3V8h-2v1h-3v1h-4v1H9v10H8v1H7v1H3v-1H2v-1H1v-3h1v-1h1v-1h3V6h2V5h3V4h4V3h3V2h3V1z"></svg:path>`,
})
export class PixelMusicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
