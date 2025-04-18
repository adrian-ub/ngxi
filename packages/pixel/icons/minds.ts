import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMindsIcon],svg[pixel-minds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v4h-1v1h-4v-1H9v-4zm4-13v7h-1v1h-1v1h-1v3H8v-3H7v-1H6v-1H5V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelMindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
