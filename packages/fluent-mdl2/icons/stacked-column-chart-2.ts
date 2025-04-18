import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackedColumnChart2Icon],svg[fluent-mdl2-stacked-column-chart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1792v128H128V128h128v1664zM768 1664H384V512h384zm-128-640H512v512h128zm0-384H512v256h128zm640 1024H896V768h384zm-128-384h-128v256h128zm0-384h-128v256h128zm640 768h-384V256h384zm-128-896h-128v768h128zm0-384h-128v256h128z"></svg:path>`,
})
export class FluentMdl2StackedColumnChart2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
