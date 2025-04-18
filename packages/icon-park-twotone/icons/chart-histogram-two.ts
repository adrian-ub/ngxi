import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChartHistogramTwoIcon],svg[icon-park-twotone-chart-histogram-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChartHistogramTwo0"><svg:g fill="none"><svg:path fill="#555" fill-rule="evenodd" d="M4 42h40z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M8 28h6v14H8zm13-10h6v24h-6zM34 6h6v36h-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChartHistogramTwo0)"></svg:path>`,
})
export class IconParkTwotoneChartHistogramTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
