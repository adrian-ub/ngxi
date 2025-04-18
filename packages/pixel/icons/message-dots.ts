import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMessageDotsIcon],svg[pixel-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9v2h-1v1h-2v-1h-1V9h1V8h2v1zm-5 0v2h-1v1h-2v-1h-1V9h1V8h2v1zM9 9v2H8v1H6v-1H5V9h1V8h2v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v16h1v1h6v4h1v-1h1v-1h1v-1h2v-1h9v-1h1V2zm-1 15H3V3h18z"></svg:path>`,
})
export class PixelMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
