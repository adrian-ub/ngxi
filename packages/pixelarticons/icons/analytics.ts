import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAnalyticsIcon],svg[pixelarticons-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 2H5v14h14zM7 12h2v5H7zm10-5h-2v10h2zm-6 3h2v2h-2zm2 4h-2v3h2z"></svg:path>`,
})
export class PixelarticonsAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
