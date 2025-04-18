import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartMinusIcon],svg[pixelarticons-chart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H3v18h18V11h-2v8H5V5h8zm-6 8h2v6H7zm6-4h-2v10h2zm2 6h2v4h-2zm6-8h-6v2h6z"></svg:path>`,
})
export class PixelarticonsChartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
