import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChartVerticalFilterIcon],svg[fluent-mdl2-bar-chart-vertical-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 384v768h-128V256h384v896h-128V384zm-384 1152l128 128H768V768h384v384h-128V896H896v640zM640 512v1152H256V512zM512 1536V640H384v896zm640-256h896v152l-256 288v328h-384v-328l-256-288zm512 392l234-264h-596l234 264v248h128zM128 128v1664h1152v128H0V128z"></svg:path>`,
})
export class FluentMdl2BarChartVerticalFilterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
