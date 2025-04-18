import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PivotChartIcon],svg[fluent-mdl2-pivot-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H0V0zm-128 128H128v1792h1792zM640 640H256V256h384zM512 384H384v128h128zm128 1408H256V768h384zM512 896H384v768h128zm1280-256H768V256h1024zm-128-256H896v128h768zM979 1709l-237-237l237-237l90 90l-82 83h293q27 0 50-10t40-27t28-41t10-50V987l-83 82l-90-90l237-237l237 237l-90 90l-83-82v293q0 53-20 99t-55 82t-81 55t-100 20H987l82 83z"></svg:path>`,
})
export class FluentMdl2PivotChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
