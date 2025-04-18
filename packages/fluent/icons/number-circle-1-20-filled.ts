import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle120FilledIcon],svg[fluent-number-circle-1-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-11.5v7a.5.5 0 0 1-1 0V8.477c-.378.484-.818.92-1.223 1.189a.5.5 0 1 1-.554-.832c.313-.209.711-.6 1.065-1.072s.624-.973.727-1.383A.5.5 0 0 1 11 6.5"></svg:path>`,
})
export class FluentNumberCircle120FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
