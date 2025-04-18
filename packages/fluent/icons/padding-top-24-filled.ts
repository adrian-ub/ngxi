import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingTop24FilledIcon],svg[fluent-padding-top-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1-1h1.75a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m5.25 0a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1m7 0a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2h-1.75a1 1 0 0 1-1-1M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m8.707-15.707a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class FluentPaddingTop24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
