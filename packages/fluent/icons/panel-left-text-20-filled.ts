import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftText20FilledIcon],svg[fluent-panel-left-text-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm7 9h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9zM6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2zM7 12.5a.5.5 0 0 0-.5-.5h-2l-.09.008A.5.5 0 0 0 4.5 13h2l.09-.008A.5.5 0 0 0 7 12.5"></svg:path>`,
})
export class FluentPanelLeftText20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
