import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRobotSolidIcon],svg[pixel-robot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h1v7H2v-1H1v-5h1zm17-3h-1V6h-5V3h-2v3H6v1H5v1H4v10h1v1h1v1h12v-1h1v-1h1V8h-1zm-2 6h-3v-3h3zm-4 4h-2v-1h2zm-6-1h3v1H7zm0-6h3v3H7zm7 7v-1h3v1zm9-6v5h-1v1h-1v-7h1v1z"></svg:path>`,
})
export class PixelRobotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
