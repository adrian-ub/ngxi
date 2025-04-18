import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackColumnChartIcon],svg[fluent-mdl2-stack-column-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1792h1664v128H128V129h128zM1792 256v1408h-384V256zm-256 1280h128V768h-128zm128-896V384h-128v256zm-384-384v1408H896V256zm-128 1280v-256h-128v256zm0-384V384h-128v768zM768 256v1408H384V256zM640 1536v-512H512v512zm0-640V384H512v512z"></svg:path>`,
})
export class FluentMdl2StackColumnChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
