import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScatterChartIcon],svg[fluent-mdl2-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128v1664h1664v128H128V128zm1536 128v256h-256V256zM768 384v256H512V384zm512 384v256h-256V768zm-512 512v256H512v-256zm896-128h256v256h-256z"></svg:path>`,
})
export class FluentMdl2ScatterChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
