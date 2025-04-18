import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMusicIcon],svg[pixel-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v1h-3v1h-3v1h-4v1H8v1H6v10H3v1H2v1H1v3h1v1h1v1h4v-1h1v-1h1V11h2v-1h4V9h3V8h2v5h-3v1h-1v1h-1v3h1v1h1v1h4v-1h1v-1h1V1zM3 21v-3h4v3zM18 6v1h-3v1h-4v1H8V7h3V6h4V5h3V4h3v2zm-1 12v-3h4v3z"></svg:path>`,
})
export class PixelMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
