import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHackernoonIcon],svg[pixel-hackernoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6H3v3h2zM3 9H1v6h2zm2 6H3v3h2zm12 3v5H5v-5h3v2h6v-2zm2-3h-2v3h2zm4-4v2h-2v2h-2V9h2v2zm-4-5h-2v3h2zm-2-5v5h-3V4h-2v9h-2V4H8v2H5V1z"></svg:path>`,
})
export class PixelHackernoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
