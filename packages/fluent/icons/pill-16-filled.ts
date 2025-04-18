import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPill16FilledIcon],svg[fluent-pill-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.05A3.5 3.5 0 1 1 12.95 8L8 12.95A3.5 3.5 0 0 1 3.05 8zm2.122 6.364l2.12-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.121 2.12zm-2.268 1.44a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 1 0 .708.707z"></svg:path>`,
})
export class FluentPill16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
