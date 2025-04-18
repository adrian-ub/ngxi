import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAreaChartIcon],svg[fa-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1408v128H0V0h128v1408zM1664 384l256 896H256V704l448-576l576 576z"></svg:path>`,
})
export class FaAreaChartIcon {
  readonly viewBox = input("0 0 2048 1536")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
