import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartBoxMultipleOutlineIcon],svg[mdi-chart-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16V4H8v12m14 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2m-6 16v2H4c-1.1 0-2-.9-2-2V7h2v13m12-9h2v3h-2m-3-8h2v8h-2m-3-6h2v6h-2Z"></svg:path>`,
})
export class MdiChartBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
