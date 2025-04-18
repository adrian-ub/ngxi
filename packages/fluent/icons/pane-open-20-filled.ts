import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaneOpen20FilledIcon],svg[fluent-pane-open-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M10.821 10.5H14.5a.5.5 0 0 0 0-1h-3.679l.999-.874a.5.5 0 1 0-.659-.752l-2 1.75a.5.5 0 0 0 0 .752l2 1.75a.5.5 0 1 0 .659-.752l-.999-.874z" fill="currentColor"></svg:path><svg:path d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm4 11V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPaneOpen20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
