import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelOctagonTimesSolidIcon],svg[pixel-octagon-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-6 9h-2v-1h-1v-1h-2v1h-1v1H8v-1H7v-2h1v-1h1v-2H8v-1H7V8h1V7h2v1h1v1h2V8h1V7h2v1h1v2h-1v1h-1v2h1v1h1v2h-1z"></svg:path>`,
})
export class PixelOctagonTimesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
