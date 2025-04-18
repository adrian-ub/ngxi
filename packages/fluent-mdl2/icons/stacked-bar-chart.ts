import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackedBarChartIcon],svg[fluent-mdl2-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1919 1792v128H128V128h128v256h1024v512H256v128h1536v512H256v256zM768 512v256h384V512zm-512 0v256h384V512zm768 640v256h640v-256zm-768 0v256h640v-256z"></svg:path>`,
})
export class FluentMdl2StackedBarChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
