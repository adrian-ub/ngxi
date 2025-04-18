import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAngleRightSolidIcon],svg[pixel-angle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-2h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9H9V8H8V7H7V5h1V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1z"></svg:path>`,
})
export class PixelAngleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
