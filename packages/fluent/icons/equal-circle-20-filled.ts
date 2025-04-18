import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualCircle20FilledIcon],svg[fluent-equal-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m3.5 7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentEqualCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
