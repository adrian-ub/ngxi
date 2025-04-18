import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEditIcon],svg[pixel-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v3h-1v1h-1V7h-1V6h2V5h-1V4h-1v2h-1V5h-1V4h1V3h3v1zm-4 10v7h-1v1H2v-1H1V6h1V5h12v1h-1v1H3v13h13v-5h1v-1z"></svg:path><svg:path fill="currentColor" d="M18 8V7h-1V6h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v4h4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-1 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h2z"></svg:path>`,
})
export class PixelEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
