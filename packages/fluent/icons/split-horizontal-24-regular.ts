import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal24RegularIcon],svg[fluent-split-horizontal-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 12.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5zM20 4.25A2.25 2.25 0 0 0 17.75 2H6.25A2.25 2.25 0 0 0 4 4.25V10h1.5V4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V10H20zm-14.5 15V13.5H4v5.75a2.25 2.25 0 0 0 2.25 2.25h11.5A2.25 2.25 0 0 0 20 19.25V13.5h-1.5v5.75a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentSplitHorizontal24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
