import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft20FilledIcon],svg[fluent-arrow-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.73 16.795a.75.75 0 0 0 1.031-1.09L4.522 10.75h12.724a.75.75 0 0 0 0-1.5H4.52l5.241-4.957a.75.75 0 1 0-1.03-1.09l-6.417 6.07a1 1 0 0 0-.3.566a.75.75 0 0 0 0 .329a1 1 0 0 0 .3.558z"></svg:path>`,
})
export class FluentArrowLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
