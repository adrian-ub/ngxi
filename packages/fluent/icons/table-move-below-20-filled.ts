import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableMoveBelow20FilledIcon],svg[fluent-table-move-below-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM12 8v3.585a1.5 1.5 0 0 0-.5-.085v-1a1.5 1.5 0 0 0-3 0v1q-.257 0-.5.085V8zM5 3h2v4H3V5a2 2 0 0 1 2-2M3 8h4v4H3.5a.5.5 0 0 1-.5-.5zm9-5H8v4h4zm1 9V8h4v3.5a.5.5 0 0 1-.5.5zm0-9h2a2 2 0 0 1 2 2v2h-4zm-4.146 9.646a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793z"></svg:path>`,
})
export class FluentTableMoveBelow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
