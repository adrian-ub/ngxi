import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTaskListSquareRtl24FilledIcon],svg[fluent-task-list-square-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM7.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6.5 9.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75m11.28-.47a.75.75 0 0 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 0-1.06 0l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class FluentTaskListSquareRtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
