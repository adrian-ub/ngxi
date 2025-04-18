import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTimesSolidIcon],svg[pixel-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v-1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8H5V7H4V6H3V5H2V4h1V3h1V2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelTimesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
