import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPencilIcon],svg[pixel-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4V3h-1V2h-1V1h-4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v7h7v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V4zM8 20H7v1H4v-1H3v-3h1v-1h1v1h1v1h1v1h1zm9-9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1zm1-3V7h-1V6h-1V4h1V3h2v1h1v1h1v2h-1v1z"></svg:path>`,
})
export class PixelPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
