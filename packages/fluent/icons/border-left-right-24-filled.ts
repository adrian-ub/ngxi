import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderLeftRight24FilledIcon],svg[fluent-border-left-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a1 1 0 0 1 1-1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3a1 1 0 1 1 0-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1a1 1 0 0 1-1-1m-4 1a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm0 14a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM6 3a1 1 0 1 1 0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1a1 1 0 1 1 0 2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"></svg:path>`,
})
export class FluentBorderLeftRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
