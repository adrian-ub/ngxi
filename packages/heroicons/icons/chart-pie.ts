import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChartPieIcon],svg[heroicons-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5z"></svg:path><svg:path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3z"></svg:path></svg:g>`,
})
export class HeroiconsChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
