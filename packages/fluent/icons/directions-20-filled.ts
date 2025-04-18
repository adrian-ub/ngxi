import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDirections20FilledIcon],svg[fluent-directions-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.877 2.879a3 3 0 0 1 4.242 0l4.998 4.998a3 3 0 0 1 0 4.242l-4.998 4.998a3 3 0 0 1-4.242 0L2.879 12.12a3 3 0 0 1 0-4.242zm3.477 3.267a.5.5 0 0 0-.708.708l.647.646H10a2 2 0 0 0-2 2v3a.5.5 0 0 0 1 0v-3a1 1 0 0 1 1-1h1.293l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentDirections20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
