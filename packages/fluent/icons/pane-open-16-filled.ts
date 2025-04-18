import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaneOpen16FilledIcon],svg[fluent-pane-open-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M9.707 8.5l.647.647a.5.5 0 0 1-.708.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .708.707l-.647.646h1.791a.5.5 0 0 1 0 1h-1.79z" fill="currentColor"></svg:path><svg:path d="M4 2.999a2 2 0 0 0-2 2v6.002a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm3 9.002V4h5a1 1 0 0 1 1 1v6.002a1 1 0 0 1-1 1H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPaneOpen16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
