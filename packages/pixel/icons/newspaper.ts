import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelNewspaperIcon],svg[pixel-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5H3v1H2v1H1v11h1v1h20v-1h1V6zM4 17H3V7h1zm17 0H6V7h15z"></svg:path><svg:path fill="currentColor" d="M14 14h5v2h-5zm0-3h5v2h-5zm0-3h5v2h-5zM7 8v5h6V8zm4 3H9v-1h2zm-4 3h6v2H7z"></svg:path>`,
})
export class PixelNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
