import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaneClose16RegularIcon],svg[fluent-pane-close-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M6.293 8.5l-.647.647a.5.5 0 1 0 .708.707l1.5-1.5a.5.5 0 0 0 0-.707l-1.5-1.5a.5.5 0 1 0-.708.707l.647.646H4.502a.5.5 0 1 0 0 1h1.79z" fill="currentColor"></svg:path><svg:path d="M12 13.001a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6.002a2 2 0 0 0 2 2h8zm1-2a1 1 0 0 1-1 1H9.998V4H12a1 1 0 0 1 1 1v6.002zM8.998 4v8.002H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.998z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPaneClose16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
