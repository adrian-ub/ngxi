import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi424FilledIcon],svg[fluent-wifi-4-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.96 18.567a1.501 1.501 0 1 0 2.122-2.122a1.501 1.501 0 0 0-2.123 2.122"></svg:path>`,
})
export class FluentWifi424FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
