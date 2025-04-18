import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPulse20FilledIcon],svg[fluent-pulse-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.01 3a.75.75 0 0 1 .712.548l2.821 10.075l2.242-7.099a.75.75 0 0 1 1.404-.07L15.495 9.5h1.755a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.69-.455l-.703-1.642l-2.392 7.573a.75.75 0 0 1-1.437-.024L6.966 6.41l-1.25 4.06A.75.75 0 0 1 5 11H2.75a.75.75 0 0 1 0-1.5h1.696l1.837-5.97A.75.75 0 0 1 7.01 3"></svg:path>`,
})
export class FluentPulse20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
