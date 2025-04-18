import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTv28FilledIcon],svg[fluent-tv-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.254 4a3.25 3.25 0 0 0-3.25 3.25v10.5A3.25 3.25 0 0 0 5.254 21h17.497a3.25 3.25 0 0 0 3.25-3.25V7.25A3.25 3.25 0 0 0 22.751 4zM6 23.75a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTv28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
