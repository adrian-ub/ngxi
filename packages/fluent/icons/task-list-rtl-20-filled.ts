import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTaskListRtl20FilledIcon],svg[fluent-task-list-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.854 4.354a.5.5 0 0 0-.708-.708L15.5 5.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0zM2.75 4.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM2 15.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m13.854-3.396l2-2a.5.5 0 0 0-.708-.708L15.5 10.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0m2 3l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentTaskListRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
