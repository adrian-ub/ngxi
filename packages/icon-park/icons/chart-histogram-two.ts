import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramTwoIcon],svg[icon-park-chart-histogram-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 42H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42H44"></svg:path><svg:rect width="6" height="14" x="8" y="28" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="6" height="24" x="21" y="18" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="6" height="36" x="34" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkChartHistogramTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
