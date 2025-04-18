import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBoldIcon],svg[pixel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-1h-2v-1h1v-1h1V4h-1V3h-1V2h-1V1H5v1H4v20h1v1h12v-1h1v-1h1v-1h1v-7zM6 3h10v1h1v6H6zm12 17h-1v1H6v-9h10v1h1v1h1z"></svg:path>`,
})
export class PixelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
