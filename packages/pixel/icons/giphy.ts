import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGiphyIcon],svg[pixel-giphy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h1v14H3V1h9v1h-1v1H5v18h14V10h1z"></svg:path><svg:path fill="currentColor" d="M21 6v2h-8V1h2v2h3v3z"></svg:path>`,
})
export class PixelGiphyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
