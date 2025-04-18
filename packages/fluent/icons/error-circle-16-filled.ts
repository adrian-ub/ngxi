import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentErrorCircle16FilledIcon],svg[fluent-error-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-5.5a.5.5 0 0 0-.492.41L7.5 5v3.5l.008.09a.5.5 0 0 0 .984 0L8.5 8.5V5l-.008-.09A.5.5 0 0 0 8 4.5"></svg:path>`,
})
export class FluentErrorCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
