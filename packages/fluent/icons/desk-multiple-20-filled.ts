import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeskMultiple20FilledIcon],svg[fluent-desk-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 3a2 2 0 0 0-1.732 1h9.732a3 3 0 0 1 3 3v6.5a.5.5 0 1 0 1 0V7a4 4 0 0 0-4-4zM2 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-1 0V8H2zm0 2h7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDeskMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
