import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionLine24RegularIcon],svg[fluent-text-position-line-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM7 8.5A2.5 2.5 0 0 0 4.5 11v4.75a.75.75 0 0 1-1.5 0V11a4 4 0 1 1 8 0v4.75a.75.75 0 0 1-1.5 0V11A2.5 2.5 0 0 0 7 8.5m6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-10 3.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextPositionLine24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
