import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal20FilledIcon],svg[fluent-split-horizontal-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zM14 2a2 2 0 0 1 2 2v4H4V4a2 2 0 0 1 2-2zM4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4z"></svg:path>`,
})
export class FluentSplitHorizontal20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
