import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanDash12RegularIcon],svg[fluent-scan-dash-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1H8a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zM3 7.5a.5.5 0 0 0-1 0V8a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1zm7 0a.5.5 0 0 0-1 0V8a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1H8a2 2 0 0 0 2-2zm-5.5-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentScanDash12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
