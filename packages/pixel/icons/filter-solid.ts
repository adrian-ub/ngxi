import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFilterSolidIcon],svg[pixel-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h-1v8h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-3H8v-2H7v-1H6v-1H5V9H4V8H3V7H2V6H1V2z"></svg:path>`,
})
export class PixelFilterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
