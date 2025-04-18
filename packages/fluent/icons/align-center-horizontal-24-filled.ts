import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignCenterHorizontal24FilledIcon],svg[fluent-align-center-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 12.75a.75.75 0 0 0 0-1.5H20v-2.5a2.25 2.25 0 0 0-2.25-2.25h-2.5A2.25 2.25 0 0 0 13 8.75v2.5h-2v-4.5A2.25 2.25 0 0 0 8.75 4.5h-2.5A2.25 2.25 0 0 0 4 6.75v4.5H2.75a.75.75 0 0 0 0 1.5H4v4.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 11 17.25v-4.5h2v2.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 20 15.25v-2.5z"></svg:path>`,
})
export class FluentAlignCenterHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
