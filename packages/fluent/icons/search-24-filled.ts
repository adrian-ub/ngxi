import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch24FilledIcon],svg[fluent-search-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.843 16.368a8 8 0 1 1 1.428-1.4l4.427 4.316a1 1 0 1 1-1.396 1.432zM16 10a6 6 0 1 0-12 0a6 6 0 0 0 12 0"></svg:path>`,
})
export class FluentSearch24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
