import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChartHorizontalIcon],svg[fluent-mdl2-bar-chart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 256v384H384V256zm-128 256V384H512v128zm-128 256v384H384V768zm-128 256V896H512v128zm640 256v384H384v-384zm-128 256v-128H512v128zM256 1792h1664v128H128V128h128z"></svg:path>`,
})
export class FluentMdl2BarChartHorizontalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
