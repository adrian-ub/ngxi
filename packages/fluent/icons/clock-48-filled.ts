import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock48FilledIcon],svg[fluent-clock-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24S13.507 5 24 5m-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class FluentClock48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
