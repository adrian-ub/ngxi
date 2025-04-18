import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBookmarkIcon],svg[pixel-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2V1H5v1H4v21h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1V2zm-1 16h-1v-1h-1v-1h-1v-1h-1v-1h-4v1H9v1H8v1H7v1H6V4h1V3h10v1h1z"></svg:path>`,
})
export class PixelBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
