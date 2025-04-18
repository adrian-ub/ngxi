import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUnderlineIcon],svg[pixel-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v15h-1v2h-1v2h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-2H3v-2H2V1h2v15h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V1z"></svg:path>`,
})
export class PixelUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
