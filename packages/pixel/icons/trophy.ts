import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrophyIcon],svg[pixel-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H6v2H1v5h1v2h1v1h1v1h1v1h1v1h3v1h2v3H7v3h10v-3h-4v-3h2v-1h3v-1h1v-1h1v-1h1v-1h1V9h1V4zM8 13H6v-1H5v-1H4V9H3V6h2v1h1v2h1v3h1zm0-4V4h8v5h-1v3h-1v2h-4v-2H9V9zm12 0v2h-1v1h-1v1h-2v-1h1v-2h1V7h1V6h2v3z"></svg:path>`,
})
export class PixelTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
