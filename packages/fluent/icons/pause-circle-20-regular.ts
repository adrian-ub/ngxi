import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseCircle20RegularIcon],svg[fluent-pause-circle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentPauseCircle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
