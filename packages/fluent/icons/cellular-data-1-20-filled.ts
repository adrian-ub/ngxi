import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCellularData120FilledIcon],svg[fluent-cellular-data-1-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 12a.75.75 0 0 1 .742.64l.008.11v2.5a.75.75 0 0 1-1.492.11L4 15.25v-2.5a.75.75 0 0 1 .75-.75m3-2a.75.75 0 0 1 .742.64l.008.11v4.5a.75.75 0 0 1-1.492.11L7 15.25v-4.5a.75.75 0 0 1 .75-.75m3-2a.75.75 0 0 1 .742.64l.008.11v6.5a.75.75 0 0 1-1.492.11L10 15.25v-6.5a.75.75 0 0 1 .75-.75m3-2a.75.75 0 0 1 .742.64l.008.11v8.499a.75.75 0 0 1-1.492.11L13 15.25v-8.5a.75.75 0 0 1 .75-.75m3-2a.74.74 0 0 1 .74.626l.01.11l-.014 10.515a.743.743 0 0 1-1.477.124l-.009-.11l.014-10.515A.743.743 0 0 1 16.75 4"></svg:path>`,
})
export class FluentCellularData120FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
