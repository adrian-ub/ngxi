import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareLeft24FilledIcon],svg[fluent-text-position-square-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm9.5 3.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m1-4.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-10.5 8a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1m2-7.75a2.25 2.25 0 0 1 4.5 0v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentTextPositionSquareLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
