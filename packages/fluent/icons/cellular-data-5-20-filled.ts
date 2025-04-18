import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCellularData520FilledIcon],svg[fluent-cellular-data-5-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 12a.75.75 0 0 1 .743.64l.008.11v2.503a.75.75 0 0 1-1.493.11L4 15.254V12.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentCellularData520FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
