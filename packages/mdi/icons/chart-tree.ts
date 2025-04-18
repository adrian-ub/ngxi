import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartTreeIcon],svg[mdi-chart-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h8v16h-8zM2 4h20V2H2zm0 4h10V6H2zm7 14h3V10H9zm-7 0h5V10H2z"></svg:path>`,
})
export class MdiChartTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
