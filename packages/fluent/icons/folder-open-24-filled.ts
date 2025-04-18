import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderOpen24FilledIcon],svg[fluent-folder-open-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v8.912l2.045-3.541a4.25 4.25 0 0 1 3.68-2.125H20V8.75a3.25 3.25 0 0 0-3.25-3.25h-5.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zm2.475 7.996h13.02c1.732 0 2.814 1.875 1.948 3.375l-3.036 5.258a2.75 2.75 0 0 1-2.382 1.375H4.255c-1.731 0-2.814-1.875-1.948-3.375l3.037-5.258a2.75 2.75 0 0 1 2.381-1.375"></svg:path>`,
})
export class FluentFolderOpen24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
