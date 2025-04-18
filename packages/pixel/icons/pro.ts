import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelProIcon],svg[pixel-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm0 13H2V6h20z"></svg:path><svg:path fill="currentColor" d="M15 9v6h6V9zm4 4h-2v-2h2zM9 9v6h2v-1h1v1h2v-2h-1v-1h1V9zm2 3v-2h1v2zM3 9v6h2v-2h3V9zm2 3v-2h1v2z"></svg:path>`,
})
export class PixelProIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
