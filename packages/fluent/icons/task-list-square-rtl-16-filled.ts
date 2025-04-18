import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTaskListSquareRtl16FilledIcon],svg[fluent-task-list-square-rtl-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm2.25 6a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 0-1H4.75a.5.5 0 0 0-.5.5m.5-4.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1zm6.852 3.146a.5.5 0 0 0-.707 0l-1.147 1.147l-.394-.395a.5.5 0 0 0-.708.707l.748.749a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0 0-.708m0-3.292a.5.5 0 1 0-.707-.708L9.748 6.293l-.394-.395a.5.5 0 1 0-.708.708l.748.748a.5.5 0 0 0 .708 0z"></svg:path>`,
})
export class FluentTaskListSquareRtl16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
