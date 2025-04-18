import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LineChartIcon],svg[fluent-mdl2-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m705 978l-449 449v366h1664v128H128V129h128v1132l449-449l255 257l704-704l256 256v166l-256-256l-704 704z"></svg:path>`,
})
export class FluentMdl2LineChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
