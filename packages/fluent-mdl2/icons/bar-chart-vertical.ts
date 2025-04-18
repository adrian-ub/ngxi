import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChartVerticalIcon],svg[fluent-mdl2-bar-chart-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512v1152H384V512zM640 1536V640H512v896zm640-768v896H896V768zm-128 768V896h-128v640zm640-1280v1408h-384V256zm-128 1280V384h-128v1152zM256 1792h1664v128H128V128h128z"></svg:path>`,
})
export class FluentMdl2BarChartVerticalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
