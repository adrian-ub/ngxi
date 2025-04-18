import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGridSolidIcon],svg[pixel-grid-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h1v8h-1v1H2v-1H1v-8h1v-1h8zm0-12h1v8h-1v1H2v-1H1V2h1V1h8zm12 12h1v8h-1v1h-8v-1h-1v-8h1v-1h8zm1-12v8h-1v1h-8v-1h-1V2h1V1h8v1z"></svg:path>`,
})
export class PixelGridSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
