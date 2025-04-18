import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatChartDecreasingIcon],svg[fluent-emoji-flat-chart-decreasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E1D8EC" d="M2.909 6.617L2.29 4.5A4 4 0 0 1 6 2h20a4 4 0 0 1 4 4v18l-1 1l.898 1.902A4 4 0 0 1 26 30H6a4 4 0 0 1-4-4V7.126z"></svg:path><svg:path fill="#B4ACBC" d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"></svg:path><svg:path fill="#E93E67" d="M2.297 4.485A4 4 0 0 0 2 6v1.125l13.868 13.713a2.2 2.2 0 0 0 3.052.04l2.15-2.017a.5.5 0 0 1 .694.01l8.129 8.053q.025-.106.044-.216L30 24l-7.062-6.738a2.2 2.2 0 0 0-3.06-.03l-2.15 2.041a.5.5 0 0 1-.698-.01z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatChartDecreasingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
