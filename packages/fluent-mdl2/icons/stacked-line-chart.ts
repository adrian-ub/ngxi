import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackedLineChartIcon],svg[fluent-mdl2-stacked-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m702 848l-405 355l660 330l963-602v138l-957 598l-707-353v479h1664v128H128V129h128v953l452-396l252 255l704-704l256 256v166l-256-256l-704 704z"></svg:path>`,
})
export class FluentMdl2StackedLineChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
