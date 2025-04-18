import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanText28FilledIcon],svg[fluent-scan-text-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 4A1.75 1.75 0 0 0 4 5.75V9a1 1 0 0 1-2 0V5.75A3.75 3.75 0 0 1 5.75 2H9a1 1 0 0 1 0 2zm0 20A1.75 1.75 0 0 1 4 22.25V19a1 1 0 1 0-2 0v3.25A3.75 3.75 0 0 0 5.75 26H9a1 1 0 1 0 0-2zM24 5.75A1.75 1.75 0 0 0 22.25 4H19a1 1 0 1 1 0-2h3.25A3.75 3.75 0 0 1 26 5.75V9a1 1 0 1 1-2 0zM22.25 24A1.75 1.75 0 0 0 24 22.25V19a1 1 0 1 1 2 0v3.25A3.75 3.75 0 0 1 22.25 26H19a1 1 0 1 1 0-2zM8 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentScanText28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
