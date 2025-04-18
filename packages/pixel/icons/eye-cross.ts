import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEyeCrossIcon],svg[pixel-eye-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1v2h-1v1h-2v-1h1v-1h1zm1-2h1v2h-1z"></svg:path><svg:path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h7v-1h2v-1h1v-1h1v-1h1v-4h-1V9h-1V8h2v1h1v2zM2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1H8v1H6v1H5v1H4v1H3v4h1v1h1v1H3v-1H2z"></svg:path><svg:path fill="currentColor" d="M13 7v1h-1v1h-1v1h-1v1H9v1H8v1H7v-2h1V9h1V8h2V7zM9 17H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm2-1h2v1h-2z"></svg:path>`,
})
export class PixelEyeCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
