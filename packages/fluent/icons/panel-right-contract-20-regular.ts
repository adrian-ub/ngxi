import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelRightContract20RegularIcon],svg[fluent-panel-right-contract-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.179 10.5l-.998.874a.5.5 0 1 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.658.752l.998.874H5.5a.5.5 0 0 0 0 1zM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm1-2a1 1 0 0 1-1 1h-3V5h3a1 1 0 0 1 1 1zm-5-9v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></svg:path>`,
})
export class FluentPanelRightContract20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
