import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualCircle24FilledIcon],svg[fluent-equal-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-5.748-1.5h-8.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5m0 4.5h-8.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class FluentEqualCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
