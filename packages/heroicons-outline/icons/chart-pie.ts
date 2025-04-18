import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineChartPieIcon],svg[heroicons-outline-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11z"></svg:path><svg:path d="M20.488 9H15V3.512A9.03 9.03 0 0 1 20.488 9"></svg:path></svg:g>`,
})
export class HeroiconsOutlineChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
