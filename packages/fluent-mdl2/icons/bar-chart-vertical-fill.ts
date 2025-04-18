import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChartVerticalFillIcon],svg[fluent-mdl2-bar-chart-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 768v896H896V768zm512-512v1408h-384V256zM256 1792h1664v128H128V128h128zM768 512v1152H384V512z"></svg:path>`,
})
export class FluentMdl2BarChartVerticalFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
