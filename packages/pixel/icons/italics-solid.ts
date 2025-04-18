import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelItalicsSolidIcon],svg[pixel-italics-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v3h-5v2h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2h5v3H2v-3h5v-2h1v-2h1v-3h1v-2h1V8h1V6h1V4H8V1z"></svg:path>`,
})
export class PixelItalicsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
