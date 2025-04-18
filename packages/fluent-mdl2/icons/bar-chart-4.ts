import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BarChart4Icon],svg[fluent-mdl2-bar-chart-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2048v-640h384v640zm512 0V896h384v1152zM1536 896h384v1152h-384zm-512 1152V384h384v1664z"></svg:path>`,
})
export class FluentMdl2BarChart4Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
