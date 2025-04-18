import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentErrorCircle20FilledIcon],svg[fluent-error-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 10.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M10 6a.5.5 0 0 0-.492.41L9.5 6.5V11l.008.09a.5.5 0 0 0 .984 0L10.5 11V6.5l-.008-.09A.5.5 0 0 0 10 6"></svg:path>`,
})
export class FluentErrorCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
