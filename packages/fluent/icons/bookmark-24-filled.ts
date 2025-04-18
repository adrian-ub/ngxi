import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmark24FilledIcon],svg[fluent-bookmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.19 21.855a.75.75 0 0 1-1.187-.61V6.25A3.25 3.25 0 0 1 8.253 3h7.498a3.25 3.25 0 0 1 3.25 3.25v14.996a.75.75 0 0 1-1.188.609l-5.81-4.181z"></svg:path>`,
})
export class FluentBookmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
