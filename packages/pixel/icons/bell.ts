import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBellIcon],svg[pixel-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm6-3v-1h-1v-2h-1V8h-1V6h-1V5h-1V4h-2V3h-1V1h-2v2h-1v1H8v1H7v1H6v2H5v6H4v2H3v1H2v1h1v1h18v-1h1v-1zM6 16v-2h1V8h1V6h2V5h4v1h2v2h1v6h1v2h1v1H5v-1z"></svg:path>`,
})
export class PixelBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
