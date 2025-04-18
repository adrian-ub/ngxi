import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTableIcon],svg[pixel-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 14h8v5h-8zm0-1V9h8v6zm0-7V3h8v5zm-2 1v6H3V9zM3 8V3h8v5zm8 8v5H3v-5z"></svg:path>`,
})
export class PixelTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
