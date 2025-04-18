import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBoltIcon],svg[pixel-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V6h1V3h1V1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1h7v4H9v3H8v2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1zm4 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5H6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v5h5z"></svg:path>`,
})
export class PixelBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
