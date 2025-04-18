import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanDash12FilledIcon],svg[fluent-scan-dash-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v.357a.75.75 0 1 0 1.5 0V4.25a.75.75 0 0 1 .75-.75h.357a.75.75 0 1 0 0-1.5zm3.143 0a.75.75 0 1 0 0 1.5h.357a.75.75 0 0 1 .75.75v.357a.75.75 0 1 0 1.5 0V4.25A2.25 2.25 0 0 0 7.75 2zM3.5 7.393a.75.75 0 1 0-1.5 0v.357A2.25 2.25 0 0 0 4.25 10h.357a.75.75 0 1 0 0-1.5H4.25a.75.75 0 0 1-.75-.75zm6.5 0a.75.75 0 1 0-1.5 0v.357a.75.75 0 0 1-.75.75h-.357a.75.75 0 1 0 0 1.5h.357A2.25 2.25 0 0 0 10 7.75zM4.75 5.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentScanDash12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
