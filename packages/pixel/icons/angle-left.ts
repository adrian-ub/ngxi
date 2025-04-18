import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAngleLeftIcon],svg[pixel-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
