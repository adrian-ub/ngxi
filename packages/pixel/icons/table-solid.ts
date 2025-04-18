import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTableSolidIcon],svg[pixel-table-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 12v-4h7v4zm7 2v4h-7v-4zm-7-8V4h7v4zm-9 6v-4h7v4zm7 2v4H4v-4zM4 8V4h7v4z"></svg:path>`,
})
export class PixelTableSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
