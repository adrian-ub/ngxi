import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartVennDiagramIcon],svg[carbon-chart-venn-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a9.9 9.9 0 0 0-4 .84A9.9 9.9 0 0 0 12 6a10 10 0 0 0 0 20a9.9 9.9 0 0 0 4-.84a9.9 9.9 0 0 0 4 .84a10 10 0 0 0 0-20m-8 18a8 8 0 0 1 0-16a8 8 0 0 1 1.76.2a10 10 0 0 0 0 15.6A8 8 0 0 1 12 24m8-8a8 8 0 0 1-4 6.92a8 8 0 0 1 0-13.84A8 8 0 0 1 20 16m0 8a8 8 0 0 1-1.76-.2a10 10 0 0 0 0-15.6A8 8 0 0 1 20 8a8 8 0 0 1 0 16"></svg:path>`,
})
export class CarbonChartVennDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
