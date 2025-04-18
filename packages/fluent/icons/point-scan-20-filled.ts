import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPointScan20FilledIcon],svg[fluent-point-scan-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.5a.5.5 0 0 0-1 0v4.025A5 5 0 0 0 3.525 11H8V6.525a5 5 0 0 1 1 0zM2.5 11h1.025a5 5 0 0 0 0 1H2.5a.5.5 0 0 1 0-1M8 17.5v-1.025a5 5 0 0 0 1 0V17.5a.5.5 0 0 1-1 0m5.476-5.5H17.5a.5.5 0 0 0 0-1h-4.025a5 5 0 0 1 0 1H9v4.475A5 5 0 0 0 13.476 12M8 16.475A5 5 0 0 1 3.525 12H8zM9 11h4.475A5 5 0 0 0 9 6.525z"></svg:path>`,
})
export class FluentPointScan20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
