import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftExpand20RegularIcon],svg[fluent-panel-left-expand-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.179 10.5l-.998.874a.5.5 0 0 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.659.752l1 .874H9.5a.5.5 0 0 0 0 1zM2 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm2 1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3v10zm4 0V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentPanelLeftExpand20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
