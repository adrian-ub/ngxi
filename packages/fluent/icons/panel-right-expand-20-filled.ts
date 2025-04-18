import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelRightExpand20FilledIcon],svg[fluent-panel-right-expand-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.821 10.5l.998.874a.5.5 0 0 1-.658.752l-2-1.75a.5.5 0 0 1 0-.752l2-1.75a.5.5 0 0 1 .658.752l-.998.874H10.5a.5.5 0 0 1 0 1zM18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-6 1V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentPanelRightExpand20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
