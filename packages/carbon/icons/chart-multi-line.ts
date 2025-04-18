import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartMultiLineIcon],svg[carbon-chart-multi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.586 28l7.178-5.998l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 20.58l-.848-1.812l-6.916 3.229l-7.994-1.938a2 2 0 0 0-1.74.384L4 25.882V20.49l7.764-6.488l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 12.58l-.847-1.812l-6.918 3.229l-7.994-1.938a2 2 0 0 0-1.74.384L4 17.882V12.49l7.764-6.488l7.994 1.938a2.02 2.02 0 0 0 1.314-.12L28 4.585l-.846-1.812l-6.918 3.224l-7.994-1.938a2 2 0 0 0-1.74.384L4 9.882V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path>`,
})
export class CarbonChartMultiLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
