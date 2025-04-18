import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsdownSolidIcon],svg[pixel-thumbsdown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v13H2v-1H1V3h1V2zm17 10v2h-1v1h-7v2h1v4h-1v1h-2v-1h-1v-3h-1v-2h-1v-1H9v-1H8V5h1V4h1V3h2V2h7v1h1v3h1v3h1v3z"></svg:path>`,
})
export class PixelThumbsdownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
