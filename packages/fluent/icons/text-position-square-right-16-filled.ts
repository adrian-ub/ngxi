import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareRight16FilledIcon],svg[fluent-text-position-square-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 1.75a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5zM6 4.25a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1 0-1.5zm.75 3.25A.75.75 0 0 0 6 6.75H2.5a.75.75 0 0 0 0 1.5H6a.75.75 0 0 0 .75-.75M6 9.25a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1 0-1.5zm8.25 3.25a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75M12.75 7a1.75 1.75 0 1 0-3.5 0v3.5a.75.75 0 0 1-1.5 0V7a3.25 3.25 0 1 1 6.5 0v3.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentTextPositionSquareRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
