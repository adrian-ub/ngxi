import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartDeleteIcon],svg[pixelarticons-chart-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H3v18h18V11h-2v8H5V5h8zm-6 8h2v6H7zm6-4h-2v10h2zm2 6h2v4h-2zm2-6h-2v2h2zm0-2V3h-2v2zm2 0h-2v2h2v2h2V7h-2zm0 0V3h2v2z"></svg:path>`,
})
export class PixelarticonsChartDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
