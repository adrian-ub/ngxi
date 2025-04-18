import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertColumn24FilledIcon],svg[fluent-table-insert-column-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0M16 5.25C16 4.007 15.105 3 14 3h-4C8.895 3 8 4.007 8 5.25V8h8zM8 14.5v-5h8v5zM8 16v2.75c0 1.243.895 2.25 2 2.25h4c1.105 0 2-1.007 2-2.25V16zm13 4.25V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class FluentTableInsertColumn24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
