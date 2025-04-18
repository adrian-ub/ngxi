import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaneClose20FilledIcon],svg[fluent-pane-close-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M9.179 10.5l-.998.874a.5.5 0 1 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.658.752l.998.874H5.5a.5.5 0 0 0 0 1h3.679z" fill="currentColor"></svg:path><svg:path d="M16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12zM12 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPaneClose20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
