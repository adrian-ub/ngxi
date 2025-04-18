import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal28FilledIcon],svg[fluent-split-horizontal-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12.998a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zM21.25 2A2.75 2.75 0 0 1 24 4.75v7.248H4V4.75A2.75 2.75 0 0 1 6.75 2zM4 22.75v-7.252h20v7.252a2.75 2.75 0 0 1-2.75 2.75H6.75A2.75 2.75 0 0 1 4 22.75"></svg:path>`,
})
export class FluentSplitHorizontal28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
