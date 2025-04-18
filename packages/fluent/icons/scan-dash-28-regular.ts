import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanDash28RegularIcon],svg[fluent-scan-dash-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75v3a.75.75 0 0 1-1.5 0v-3A3.75 3.75 0 0 1 5.75 2h3a.75.75 0 0 1 0 1.5zm0 21a2.25 2.25 0 0 1-2.25-2.25v-3a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 0 5.75 26h3a.75.75 0 0 0 0-1.5zM24.5 5.75a2.25 2.25 0 0 0-2.25-2.25h-3a.75.75 0 0 1 0-1.5h3A3.75 3.75 0 0 1 26 5.75v3a.75.75 0 0 1-1.5 0zM22.25 24.5a2.25 2.25 0 0 0 2.25-2.25v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 22.25 26h-3a.75.75 0 0 1 0-1.5zM7.5 14a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.25A.75.75 0 0 1 7.5 14"></svg:path>`,
})
export class FluentScanDash28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
