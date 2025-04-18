import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChartVerticalFilterSolidIcon],svg[fluent-mdl2-bar-chart-vertical-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 1536l128 128H768V768h384v384h-128zm640-1280v896h-384V256zM640 512v1152H256V512zM128 128v1664h1152v128H0V128zm1024 1152h896v152l-256 288v328h-384v-328l-256-288z"></svg:path>`,
})
export class FluentMdl2BarChartVerticalFilterSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
