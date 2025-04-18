import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareLeft16FilledIcon],svg[fluent-text-position-square-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 1.75a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm7.5 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM9.25 7.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75M10 9.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM1.75 12.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75M3.25 7a1.75 1.75 0 1 1 3.5 0v3.5a.75.75 0 0 0 1.5 0V7a3.25 3.25 0 1 0-6.5 0v3.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentTextPositionSquareLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
