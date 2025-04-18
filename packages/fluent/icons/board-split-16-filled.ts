import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit16FilledIcon],svg[fluent-board-split-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5V7h7V2zm5.5 8h4V6h-4zm4 1h-4v3h1.5a2.5 2.5 0 0 0 2.5-2.5zm0-6.5V5h-4V2h1.5A2.5 2.5 0 0 1 14 4.5M9 8H2v3.5A2.5 2.5 0 0 0 4.5 14H9z"></svg:path>`,
})
export class FluentBoardSplit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
