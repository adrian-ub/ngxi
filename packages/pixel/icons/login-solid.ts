import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLoginSolidIcon],svg[pixel-login-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h3v20h-3zM8 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-2h1v-1h1v-1h1v-1H1v-4h9V9H9V8H8V7H7V5h1z"></svg:path>`,
})
export class PixelLoginSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
