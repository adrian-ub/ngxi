import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLoginIcon],svg[pixel-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19v1H8v-2h1v-1h1v-1h1v-1h1v-1h1v-1H1v-2h12v-1h-1V9h-1V8h-1V7H9V6H8V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1zM21 2h2v20h-2z"></svg:path>`,
})
export class PixelLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
