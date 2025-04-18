import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrendingSolidIcon],svg[pixel-trending-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v10h-1v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H5v1H4v1H1v-3h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5z"></svg:path>`,
})
export class PixelTrendingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
