import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlowchartCircle20FilledIcon],svg[fluent-flowchart-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4-3.5v2a.5.5 0 0 0 .5.5H7v1.793l-1.354 1.353a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708 0L9.207 13H11v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5H9.207L8 10.793V9h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentFlowchartCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
