import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal24FilledIcon],svg[fluent-split-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 12.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5zM17.75 2A2.25 2.25 0 0 1 20 4.25V10H4V4.25A2.25 2.25 0 0 1 6.25 2zM4 19.25V13.5h16v5.75a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.25"></svg:path>`,
})
export class FluentSplitHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
