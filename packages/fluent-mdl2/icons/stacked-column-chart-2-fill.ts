import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackedColumnChart2FillIcon],svg[fluent-mdl2-stacked-column-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 256v1408h-384V256zm-128 384V384h-128v256zm-384 128v896H896V768zm-128 384V896h-128v256zM768 512v1152H384V512zM640 896V640H512v256zm-384 896h1664v128H128V128h128z"></svg:path>`,
})
export class FluentMdl2StackedColumnChart2FillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
