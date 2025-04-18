import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionLine24FilledIcon],svg[fluent-text-position-line-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm3.25 5A2.25 2.25 0 0 0 4.75 11v4.75a1 1 0 1 1-2 0V11a4.25 4.25 0 0 1 8.5 0v4.75a1 1 0 1 1-2 0V11A2.25 2.25 0 0 0 7 8.75m6.75 5.5a1 1 0 1 0 0 2h6.5a1 1 0 1 0 0-2zm-10 3.5a1 1 0 1 0 0 2h16.5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTextPositionLine24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
