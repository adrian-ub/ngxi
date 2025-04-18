import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquareRight24FilledIcon],svg[fluent-text-position-square-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 3.75a1 1 0 1 1 0 2H3.75a1 1 0 0 1 0-2zm-9.5 3.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2zm1 8a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1m-1-4.5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm10.5 8a1 1 0 0 0-1-1H3.75a1 1 0 1 0 0 2h16.5a1 1 0 0 0 1-1m-2-7.75a2.25 2.25 0 0 0-4.5 0v4.75a1 1 0 1 1-2 0V11a4.25 4.25 0 0 1 8.5 0v4.75a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentTextPositionSquareRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
