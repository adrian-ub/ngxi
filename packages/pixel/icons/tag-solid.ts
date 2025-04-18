import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTagSolidIcon],svg[pixel-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v9h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2zM4 5h1V4h2v1h1v2H7v1H5V7H4z"></svg:path>`,
})
export class PixelTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
