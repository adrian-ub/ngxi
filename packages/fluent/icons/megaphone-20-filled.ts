import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphone20FilledIcon],svg[fluent-megaphone-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.113 3.352A1.5 1.5 0 0 1 18 4.802v10.31a1.5 1.5 0 0 1-1.974 1.424L11.27 14.95A3.25 3.25 0 0 1 5 13.75v-.89l-1.974-.658A1.5 1.5 0 0 1 2 10.78V8.27a1.5 1.5 0 0 1 1.114-1.45zM6 13.194v.556a2.25 2.25 0 0 0 4.32.884z"></svg:path>`,
})
export class FluentMegaphone20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
