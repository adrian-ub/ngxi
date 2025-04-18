import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTextMultiple24FilledIcon],svg[fluent-slide-text-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM6.75 7.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 14.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75m15-6.739a3.25 3.25 0 0 1 1.5 2.739v6c0 2.9-2.35 5.25-5.25 5.25h-9A3.25 3.25 0 0 1 5.511 20H17.25A3.75 3.75 0 0 0 21 16.25z"></svg:path>`,
})
export class FluentSlideTextMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
