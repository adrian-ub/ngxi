import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionSquare24FilledIcon],svg[fluent-text-position-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm-1 4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m14.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-13.5 2.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm13.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-13.5 2.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm13.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-14.5 3.5a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1m7-7.75a2.25 2.25 0 0 1 4.5 0v4.75a1 1 0 1 0 2 0V11a4.25 4.25 0 0 0-8.5 0v4.75a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentTextPositionSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
