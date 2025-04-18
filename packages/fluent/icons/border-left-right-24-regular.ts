import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderLeftRight24RegularIcon],svg[fluent-border-left-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.75a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75m-3.75.75a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5zm0 15a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM6.25 3a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3z"></svg:path>`,
})
export class FluentBorderLeftRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
