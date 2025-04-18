import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FlowChartIcon],svg[fluent-mdl2-flow-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 1152h640v640h-640v-256H992l-416 416l-480-480l416-416V640H256V0h640v640H640v416l352 352h416zM384 128v384h384V128zm192 1632l288-288l-288-288l-288 288zm1344-96v-384h-384v384z"></svg:path>`,
})
export class FluentMdl2FlowChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
