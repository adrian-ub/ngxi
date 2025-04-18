import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCodeIcon],svg[pixel-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v1H6v1H5v1H4v1H3v2h1v1h1v1h1v1h1v1H5v-1H4v-1H3v-1H2v-1H1v-2h1v-1h1V9h1V8h1V7zm8-4h1v3h-1v3h-1v3h-1v2h-1v3h-1v3h-1v1H9v-3h1v-3h1v-3h1v-2h1V7h1V4h1zm8 8v2h-1v1h-1v1h-1v1h-1v1h-2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h2v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
