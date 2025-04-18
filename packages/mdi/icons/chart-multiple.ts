import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartMultipleIcon],svg[mdi-chart-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v2H6V2h2v11.57l5.71-9l3.16 2.11l2.42-2.42l1.42 1.42l-3.58 3.61l-2.84-1.89L8.82 16M4 20V4H2v18h20v-2Z"></svg:path>`,
})
export class MdiChartMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
