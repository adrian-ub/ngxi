import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsupSolidIcon],svg[pixel-thumbsup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v2h-1v3h-1v3h-1v3h-1v1h-7v-1h-2v-1H9v-1H8v-9h1V9h1V8h1V6h1V3h1V2h2v1h1v4h-1v2h7v1zM6 9v13H2v-1H1V10h1V9z"></svg:path>`,
})
export class PixelThumbsupSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
