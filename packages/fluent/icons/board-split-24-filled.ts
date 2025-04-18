import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit24FilledIcon],svg[fluent-board-split-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25V11h11V3zM3 17.75V12.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75M15.5 16v5h2.25A3.25 3.25 0 0 0 21 17.75V16zm5.5-1.5v-5h-5.5v5zM21 8h-5.5V3h2.25A3.25 3.25 0 0 1 21 6.25z"></svg:path>`,
})
export class FluentBoardSplit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
