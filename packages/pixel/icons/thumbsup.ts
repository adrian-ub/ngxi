import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsupIcon],svg[pixel-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-7V7h1V3h-1V2h-2v1h-1v3h-1v2h-1v1H9v1H8v9h1v1h1v1h2v1h7v-1h1v-3h1v-3h1v-3h1v-2zm-3 5v3h-1v2h-5v-1h-2v-1h-1v-7h1v-1h1V9h1v1h1v1h6v4zM6 9v13H2v-1H1V10h1V9z"></svg:path>`,
})
export class PixelThumbsupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
