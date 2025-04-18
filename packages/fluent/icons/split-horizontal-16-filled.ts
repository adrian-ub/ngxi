import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal16FilledIcon],svg[fluent-split-horizontal-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 8a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM11 1a2 2 0 0 1 2 2v3H3V3a2 2 0 0 1 2-2zM3 9v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9z"></svg:path>`,
})
export class FluentSplitHorizontal16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
