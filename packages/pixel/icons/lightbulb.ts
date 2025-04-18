import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLightbulbIcon],svg[pixel-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v1h-1v1h-2v-1h-1v-1zM11 4h2v1h-2zm-1 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M19 7V5h-1V4h-1V3h-1V2h-2V1h-4v1H8v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h1v1h1v4h6v-4h1v-1h1v-1h1v-1h1v-2h1V7zm-1 4h-1v2h-1v1h-1v1h-1v1h-4v-1H9v-1H8v-1H7v-2H6V7h1V5h1V4h2V3h4v1h2v1h1v2h1z"></svg:path><svg:path fill="currentColor" d="M9 6h1v1H9zM8 7h1v2H8z"></svg:path>`,
})
export class PixelLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
