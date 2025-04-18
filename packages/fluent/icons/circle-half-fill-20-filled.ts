import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill20FilledIcon],svg[fluent-circle-half-fill-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 10a6.5 6.5 0 0 1 13 0zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class FluentCircleHalfFill20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
