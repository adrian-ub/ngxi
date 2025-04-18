import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPodcastsIcon],svg[pixel-podcasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H8v-2h3v-1H8V9h3V8H8V6h3V5H8V3h1V2h1V1h4v1h1v1h1v2h-3v1h3v2h-3v1h3v2h-3v1h3v2h-1v1h-1v1h-4v-1H9z"></svg:path><svg:path fill="currentColor" d="M19 12v3h-1v2h-1v1h-2v1h-2v2h3v2H8v-2h3v-2H9v-1H7v-1H6v-2H5v-3h1v2h1v2h1v1h2v1h4v-1h2v-1h1v-2h1v-2z"></svg:path>`,
})
export class PixelPodcastsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
